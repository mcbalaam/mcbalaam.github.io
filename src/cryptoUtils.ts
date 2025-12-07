import { ed25519 } from "@noble/curves/ed25519.js";
import { randomBytes } from "@noble/hashes/utils.js";
import { bytesToHex, hexToBytes } from "@noble/hashes/utils.js";

export interface KeyPair {
  publicKey: Uint8Array;
  privateKey: Uint8Array;
}

import { t } from "translations/translate";

export interface SignatureData {
  message: string;
  userId: string;
}

export class CryptoUtils {
  /**
   * Generate Ed25519 key pair
   */
  static generateKeyPair(): KeyPair {
    // Generate 32 random bytes for private key with timestamp and additional randomness
    const timestamp = Date.now().toString();
    const timestampBytes = new TextEncoder().encode(timestamp);
    const random1 = randomBytes(32);
    const random2 = randomBytes(32);

    // Combine multiple sources of randomness with timestamp
    const combined = new Uint8Array(32);
    for (let i = 0; i < 32; i++) {
      const timestampByte = timestampBytes[i % timestampBytes.length]!;
      combined[i] = random1[i]! ^ random2[i]! ^ timestampByte;
    }

    const privateKey = combined;
    const publicKey = ed25519.getPublicKey(privateKey);

    return {
      publicKey,
      privateKey,
    };
  }

  /**
   * Create message to sign from signature data
   */
  static createMessage(data: SignatureData): Uint8Array {
    const encoder = new TextEncoder();
    const message = data.message || "";
    const combined = `${message}|${data.userId}`;
    return encoder.encode(combined);
  }

  /**
   * Sign data with private key using Ed25519
   */
  static sign(data: SignatureData, privateKey: Uint8Array): Uint8Array {
    const message = this.createMessage(data);
    return ed25519.sign(message, privateKey);
  }

  /**
   * Verify signature with public key using Ed25519
   */
  static verify(
    data: SignatureData,
    signature: Uint8Array,
    publicKey: Uint8Array,
  ): boolean {
    try {
      const message = this.createMessage(data);
      return ed25519.verify(signature, message, publicKey);
    } catch (error) {
      console.error("Signature verification error:", error);
      return false;
    }
  }

  /**
   * Convert bytes to hex string
   */
  static bytesToHex(bytes: Uint8Array): string {
    return bytesToHex(bytes);
  }

  /**
   * Convert hex string to bytes
   */
  static hexToBytes(hex: string): Uint8Array {
    return hexToBytes(hex);
  }

  /**
   * Get short display version of public key
   */
  static getPublicKeyDisplay(publicKey: Uint8Array | string): string {
    const hex =
      typeof publicKey === "string" ? publicKey : this.bytesToHex(publicKey);
    return hex.substring(0, 16); // First 16 chars for display
  }

  /**
   * Generate full signature data for a sign
   */
  static generateSignatureForSign(
    message: string,
    userId: string,
    isAnonymous: boolean,
  ): {
    keyPair: KeyPair;
    signature: string;
    publicKey: string;
  } {
    const displayMessage = isAnonymous ? "Anonymous" : message || "";

    const data: SignatureData = {
      message: displayMessage,
      userId,
    };

    const keyPair = this.generateKeyPair();
    const signatureBytes = this.sign(data, keyPair.privateKey);

    return {
      keyPair,
      signature: this.bytesToHex(signatureBytes),
      publicKey: this.bytesToHex(keyPair.publicKey),
    };
  }

  /**
   * Verify sign signature
   */
  static verifySign(sign: {
    message?: string;
    created_at: string;
    user_id?: string;
    is_anonymous: boolean;
    public_key?: string;
    signature?: string;
  }): {
    isValid: boolean;
    publicKeyDisplay?: string;
    error?: string;
  } {
    try {
      if (!sign.public_key || !sign.signature) {
        return {
          isValid: false,
          error: t("hashes_signature"),
        };
      }

      const displayMessage = sign.is_anonymous
        ? "Anonymous"
        : sign.message || "";
      const userId = sign.user_id || "";

      const data: SignatureData = {
        message: displayMessage,
        userId,
      };

      const publicKey = this.hexToBytes(sign.public_key);
      const signature = this.hexToBytes(sign.signature);

      const isValid = this.verify(data, signature, publicKey);
      const publicKeyDisplay = this.getPublicKeyDisplay(publicKey);

      return {
        isValid,
        publicKeyDisplay,
      };
    } catch (error) {
      return {
        isValid: false,
        error: error instanceof Error ? error.message : "Verification failed",
      };
    }
  }
}
