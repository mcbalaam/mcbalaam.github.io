import { createClient } from "@supabase/supabase-js";
import {
  SUPABASE_URL,
  SUPABASE_ANON_KEY,
  ADMIN_GITHUB_USERNAME,
} from "./config";

import { t } from "translations/translate";
import { CryptoUtils } from "./cryptoUtils";

export interface Sign {
  id: number;
  github_username?: string;
  github_avatar?: string;
  message?: string;
  is_anonymous: boolean;
  approved: boolean;
  created_at: string;
  user_id?: string;
  public_key?: string;
  signature?: string;
}

export interface SignFormData {
  message?: string;
  is_anonymous: boolean;
}

export interface SignWithVerification extends Sign {
  signatureValid?: boolean;
  publicKeyDisplay?: string;
  verificationError?: string;
}

export interface UserSession {
  id: string;
  email?: string;
  github_username?: string;
  github_avatar?: string;
  telegram_id?: string;
  is_admin: boolean;
}

export interface UserStatus {
  status: string;
  vanity_id: string | null;
  updated_at: string;
}

const supabaseUrl = SUPABASE_URL;
const supabaseAnonKey = SUPABASE_ANON_KEY;
const adminGithubUsername = ADMIN_GITHUB_USERNAME;

export const supabase = createClient(supabaseUrl || "", supabaseAnonKey || "", {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
    flowType: "pkce",
    storageKey: "supabase.auth.token",
  },
  global: {
    headers: {
      "X-Client-Info": "supabase-js/2.86.0",
    },
  },
});

async function fetchWithRetry(
  url: string,
  options: RequestInit = {},
  timeoutMs = 5000,
  maxRetries = 2,
): Promise<Response> {
  let lastError: any;

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

    try {
      const response = await fetch(url, {
        ...options,
        signal: controller.signal,
      });
      clearTimeout(timeoutId);

      if (response.ok) {
        return response;
      }

      if (
        attempt === maxRetries ||
        (response.status >= 400 &&
          response.status < 500 &&
          response.status !== 429)
      ) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      if (attempt < maxRetries) {
        const delay = Math.min(1000 * Math.pow(2, attempt), 10000);
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    } catch (error: any) {
      clearTimeout(timeoutId);
      lastError = error;

      if (
        attempt === maxRetries ||
        (error.name !== "AbortError" && error.name !== "TypeError")
      ) {
        throw error;
      }

      if (attempt < maxRetries) {
        const delay = Math.min(1000 * Math.pow(2, attempt), 10000);
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
  }

  throw lastError;
}

export class SignManager {
  static async getApprovedSigns(): Promise<SignWithVerification[]> {
    try {
      const url = `${supabaseUrl}/rest/v1/signs?select=*&approved=eq.true&order=created_at.desc`;

      console.time("getApprovedSigns");
      const response = await fetchWithRetry(
        url,
        {
          headers: {
            apikey: supabaseAnonKey || "",
            Authorization: `Bearer ${supabaseAnonKey}`,
            "Content-Type": "application/json",
            "Cache-Control": "no-cache",
          },
        },
        10000,
        2,
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.timeEnd("getApprovedSigns");

      // Verify signatures for all signs
      return (data || []).map((sign: Sign) => {
        const verification = CryptoUtils.verifySign(sign);
        return {
          ...sign,
          signatureValid: verification.isValid,
          publicKeyDisplay: verification.publicKeyDisplay,
          verificationError: verification.error,
        };
      });
    } catch (error: any) {
      console.error("Error fetching approved signs:", error);
      if (error.name === "AbortError") {
        console.warn("Request timeout after retries");
      }
      return [];
    }
  }

  static async createSign(formData: SignFormData): Promise<Sign> {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      throw new Error("User must be authenticated to create a sign");
    }

    const { data: blacklistData, error: blacklistError } = await supabase
      .from("blacklist")
      .select("id")
      .eq("user_id", user.id)
      .single();

    if (!blacklistError && blacklistData) {
      throw new Error("User is blacklisted and cannot create signs");
    }

    const { data: existingSigns, error: existingError } = await supabase
      .from("signs")
      .select("id")
      .eq("user_id", user.id);

    if (!existingError && existingSigns && existingSigns.length > 0) {
      throw new Error("User has already created a sign");
    }

    const userMetadata = user.user_metadata;
    const githubUsername = userMetadata.user_name;
    const githubAvatar = userMetadata.avatar_url;

    const isAdmin =
      adminGithubUsername && githubUsername === adminGithubUsername;

    // Generate timestamp first
    const timestamp = new Date().toISOString();

    // Generate signature with the timestamp
    const signatureData = CryptoUtils.generateSignatureForSign(
      formData.message || "",
      user.id,
      formData.is_anonymous,
      timestamp,
    );

    const signData = {
      github_username: githubUsername,
      github_avatar: githubAvatar,
      message: formData.message || null,
      is_anonymous: formData.is_anonymous,
      approved: isAdmin,
      user_id: user.id,
      public_key: signatureData.publicKey,
      signature: signatureData.signature,
      created_at: timestamp,
    };

    const { data, error } = await supabase
      .from("signs")
      .insert([signData])
      .select()
      .single();

    if (error) {
      console.error("Error creating sign:", error);
      throw error;
    }

    return data;
  }

  static async canUserCreateSign(): Promise<{
    canCreate: boolean;
    reason?: string;
  }> {
    try {
      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser();

      if (authError || !user) {
        return { canCreate: false, reason: "User not authenticated" };
      }

      const { data: blacklistData, error: blacklistError } = await supabase
        .from("blacklist")
        .select("id")
        .eq("user_id", user.id)
        .single();

      if (!blacklistError && blacklistData) {
        return { canCreate: false, reason: t("sign_blacklisted") };
      }

      const { data: existingSigns, error: existingError } = await supabase
        .from("signs")
        .select("id")
        .eq("user_id", user.id);

      if (!existingError && existingSigns && existingSigns.length > 0) {
        return { canCreate: false, reason: t("sign_alreadyLeft") };
      }

      return { canCreate: true };
    } catch (error: any) {
      console.error("Error checking if user can create sign:", error);
      return { canCreate: false, reason: t("sign_error") };
    }
  }

  static async getUserSigns(): Promise<SignWithVerification[]> {
    try {
      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser();

      if (authError) {
        console.error("Auth error fetching user:", authError);
        return [];
      }

      if (!user) {
        return [];
      }

      const { data, error } = await supabase
        .from("signs")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching user signs:", error);
        return [];
      }

      // Verify signatures for all signs
      return (data || []).map((sign: Sign) => {
        const verification = CryptoUtils.verifySign(sign);
        return {
          ...sign,
          signatureValid: verification.isValid,
          publicKeyDisplay: verification.publicKeyDisplay,
          verificationError: verification.error,
        };
      });
    } catch (error: any) {
      console.error("Network error fetching user signs:", error);
      if (error.name === "AbortError") {
        console.warn("Request timeout fetching user signs");
      }
      return [];
    }
  }

  static async updateSign(
    signId: number,
    updates: Partial<SignFormData>,
  ): Promise<Sign> {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      throw new Error("User must be authenticated to update a sign");
    }

    const { data, error } = await supabase
      .from("signs")
      .update(updates)
      .eq("id", signId)
      .eq("user_id", user.id)
      .select()
      .single();

    if (error) {
      console.error("Error updating sign:", error);
      throw error;
    }

    return data;
  }

  static async deleteSign(signId: number): Promise<void> {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      throw new Error("User must be authenticated to delete a sign");
    }

    const userMetadata = user.user_metadata;
    const githubUsername = userMetadata?.github_username;
    const isAdmin =
      adminGithubUsername && githubUsername === adminGithubUsername;

    let query = supabase.from("signs").delete().eq("id", signId);

    if (!isAdmin) {
      query = query.eq("user_id", user.id);
    }

    const { error } = await query;

    if (error) {
      console.error("Error deleting sign:", error);
      throw error;
    }
  }

  static async adminToggleApproval(
    signId: number,
    approved: boolean,
  ): Promise<Sign> {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      throw new Error("User must be authenticated");
    }

    const userMetadata = user.user_metadata;
    const githubUsername = userMetadata?.github_username;
    const isAdmin =
      adminGithubUsername && githubUsername === adminGithubUsername;
    if (!isAdmin) {
      throw new Error("Only admin can toggle approval");
    }

    const { data, error } = await supabase
      .from("signs")
      .update({ approved })
      .eq("id", signId)
      .select()
      .single();

    if (error) {
      console.error("Error toggling approval:", error);
      throw error;
    }

    return data;
  }

  static async adminRemoveComment(signId: number): Promise<Sign> {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      throw new Error("User must be authenticated");
    }

    const userMetadata = user.user_metadata;
    const githubUsername = userMetadata?.github_username;
    const isAdmin =
      adminGithubUsername && githubUsername === adminGithubUsername;
    if (!isAdmin) {
      throw new Error("Only admin can remove comments");
    }

    const { data, error } = await supabase
      .from("signs")
      .update({ message: null })
      .eq("id", signId)
      .select()
      .single();

    if (error) {
      console.error("Error removing comment:", error);
      throw error;
    }

    return data;
  }
}

export class AuthManager {
  static async signInWithGitHub() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: window.location.origin,
        scopes: "user:email,read:user",
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
      },
    });

    if (error) {
      console.error("Error signing in with GitHub:", error);
      throw error;
    }

    return data;
  }

  static async signOut() {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error("Error signing out:", error);
      throw error;
    }
  }

  static async getCurrentSession(): Promise<UserSession | null> {
    try {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      if (error) {
        console.error("Error getting user session:", error);
        return null;
      }

      if (!user) {
        return null;
      }

      const userMetadata = user.user_metadata;
      const githubUsername = userMetadata?.user_name;
      const githubAvatar = userMetadata?.avatar_url || userMetadata?.picture;
      const isAdmin =
        adminGithubUsername && githubUsername === adminGithubUsername;
      const isAdminBool = !!isAdmin;

      return {
        id: user.id,
        github_username: githubUsername,
        github_avatar: githubAvatar,
        is_admin: isAdminBool,
      };
    } catch (error: any) {
      console.error("Network error getting user session:", error);
      return null;
    }
  }

  static async isAuthenticated(): Promise<boolean> {
    try {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      if (error) {
        console.error("Error checking authentication:", error);
        return false;
      }

      return !!user;
    } catch (error: any) {
      console.error("Network error checking authentication:", error);
      return false;
    }
  }
}

export class StatusManager {
  static async getStatus(): Promise<UserStatus | null> {
    try {
      const url = `${supabaseUrl}/rest/v1/user_status?select=status,vanity_id,updated_at&id=eq.1`;

      const response = await fetchWithRetry(
        url,
        {
          headers: {
            apikey: supabaseAnonKey || "",
            Authorization: `Bearer ${supabaseAnonKey}`,
            "Content-Type": "application/json",
            "Cache-Control": "no-cache",
          },
        },
        5000,
        1,
      );

      if (!response.ok) {
        console.warn("Failed to fetch status, returning default");
        return {
          status: "busy auracoding",
          vanity_id: null,
          updated_at: new Date().toISOString(),
        };
      }

      const data = await response.json();
      if (data && data.length > 0) {
        return data[0];
      }

      return {
        status: "busy auracoding",
        vanity_id: null,
        updated_at: new Date().toISOString(),
      };
    } catch (error: any) {
      console.error("Error fetching status:", error);
      return {
        status: "busy auracoding",
        vanity_id: null,
        updated_at: new Date().toISOString(),
      };
    }
  }

  static async updateStatus(status?: string, vanityId?: string | null): Promise<UserStatus> {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      throw new Error("User must be authenticated to update status");
    }

    const updates: any = {};
    if (status !== undefined) updates.status = status;
    if (vanityId !== undefined) updates.vanity_id = vanityId;

    const { data, error } = await supabase
      .from("user_status")
      .update(updates)
      .eq("id", 1)
      .select("status, vanity_id, updated_at")
      .single();

    if (error) {
      console.error("Error updating status:", error);
      throw error;
    }

    return data;
  }

  static async getStatusForAdmin(): Promise<{ canUpdate: boolean; currentStatus: UserStatus | null }> {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return { canUpdate: false, currentStatus: null };
    }

    const userMetadata = user.user_metadata;
    const githubUsername = userMetadata?.user_name;
    const isAdmin = adminGithubUsername && githubUsername === adminGithubUsername;

    if (!isAdmin) {
      return { canUpdate: false, currentStatus: null };
    }

    try {
      const status = await StatusManager.getStatus();
      return { canUpdate: true, currentStatus: status };
    } catch (error) {
      console.error("Error fetching status for admin:", error);
      return { canUpdate: true, currentStatus: null };
    }
  }
}

export const getApprovedSigns = SignManager.getApprovedSigns;
export const createSign = SignManager.createSign;
export const getUserSigns = SignManager.getUserSigns;
export const updateSign = SignManager.updateSign;
export const deleteSign = SignManager.deleteSign;
export const adminToggleApproval = SignManager.adminToggleApproval;
export const adminRemoveComment = SignManager.adminRemoveComment;
export const canUserCreateSign = SignManager.canUserCreateSign;

export const signInWithGitHub = AuthManager.signInWithGitHub;
export const signOut = AuthManager.signOut;
export const getCurrentSession = AuthManager.getCurrentSession;
export const isAuthenticated = AuthManager.isAuthenticated;

export const getStatus = StatusManager.getStatus;
export const updateStatus = StatusManager.updateStatus;
export const getStatusForAdmin = StatusManager.getStatusForAdmin;
