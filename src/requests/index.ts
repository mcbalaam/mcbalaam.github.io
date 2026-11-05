import { GoTrueClient } from "@supabase/auth-js";
import { PostgrestClient } from "@supabase/postgrest-js";
import {
  SUPABASE_URL,
  SUPABASE_ANON_KEY,
  ADMIN_GITHUB_USERNAME,
} from "../config";

import { Crypto } from "./crypto";

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

const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

const _supabaseUrl = supabaseUrl || "https://placeholder.supabase.co";
const _supabaseAnonKey = supabaseAnonKey || "placeholder-anon-key";

export const auth = new GoTrueClient({
  url: `${_supabaseUrl}/auth/v1`,
  headers: {
    apikey: _supabaseAnonKey,
    "X-Client-Info": "auth-js/2.86.0",
  },
  persistSession: true,
  autoRefreshToken: true,
  detectSessionInUrl: true,
  flowType: "pkce",
  storageKey: "supabase.auth.token",
});

export const db = new PostgrestClient(`${_supabaseUrl}/rest/v1`, {
  headers: {
    apikey: _supabaseAnonKey,
    Authorization: `Bearer ${_supabaseAnonKey}`,
    "X-Client-Info": "postgrest-js/2.86.0",
  },
});

async function syncAuthToken() {
  const { data } = await auth.getSession();
  const token = data.session?.access_token ?? _supabaseAnonKey;
  db.headers = {
    ...db.headers,
    // @ts-expect-error
    apikey: _supabaseAnonKey,
    Authorization: `Bearer ${token}`,
  };
}

async function getUser() {
  const { data } = await auth.getUser();
  return data.user;
}

// ---- fetchWithRetry (оставлен как был) ----
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
    if (!isSupabaseConfigured) return [];
    try {
      const url = `${supabaseUrl}/rest/v1/signs?select=*&approved=eq.true&order=created_at.desc`;
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

      return (data || []).map((sign: Sign) => {
        const verification = Crypto.verifySign(sign);
        return {
          ...sign,
          signatureValid: verification.isValid,
          publicKeyDisplay: verification.publicKeyDisplay,
          verificationError: verification.error,
        };
      });
    } catch (error: any) {
      if (error.name === "AbortError") {
        console.warn("Request timeout after retries");
      }
      return [];
    }
  }

  static async createSign(formData: SignFormData): Promise<Sign> {
    await syncAuthToken();
    const user = await getUser();

    if (!user) {
      throw new Error("User must be authenticated to create a sign");
    }

    const { data: blacklistData, error: blacklistError } = await db
      .from("blacklist")
      .select("id")
      .eq("user_id", user.id)
      .maybeSingle();

    if (!blacklistError && blacklistData) {
      throw new Error("User is blacklisted and cannot create signs");
    }

    const { data: existingSigns, error: existingError } = await db
      .from("signs")
      .select("id")
      .eq("user_id", user.id);

    if (!existingError && existingSigns && existingSigns.length > 0) {
      throw new Error("User has already created a sign");
    }

    const userMetadata = user.user_metadata ?? {};
    const githubUsername = userMetadata.user_name;
    const githubAvatar = userMetadata.avatar_url;

    const isAdmin =
      adminGithubUsername && githubUsername === adminGithubUsername;

    const timestamp = new Date().toISOString();

    const signatureData = Crypto.generateSignatureForSign(
      formData.message || "",
      user.id,
      formData.is_anonymous,
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

    const { data, error } = await db
      .from("signs")
      .insert([signData])
      .select()
      .single();

    if (error) {
      console.error("Error creating sign:", error);
      throw error;
    }

    return data as Sign;
  }

  static async canUserCreateSign(): Promise<{
    canCreate: boolean;
    reason?: string;
  }> {
    try {
      await syncAuthToken();
      const user = await getUser();

      if (!user) {
        return { canCreate: false, reason: "auth.notAuthenticated" };
      }

      const { data: blacklistData, error: blacklistError } = await db
        .from("blacklist")
        .select("id")
        .eq("user_id", user.id)
        .maybeSingle();

      if (!blacklistError && blacklistData) {
        return { canCreate: false, reason: "sign.blacklisted" };
      }

      const { data: existingSigns, error: existingError } = await db
        .from("signs")
        .select("id")
        .eq("user_id", user.id);

      if (!existingError && existingSigns && existingSigns.length > 0) {
        return { canCreate: false, reason: "sign.alreadyLeft" };
      }

      return { canCreate: true };
    } catch (error: any) {
      console.error("Error checking if user can create sign:", error);
      return { canCreate: false, reason: "sign.error" };
    }
  }

  static async getUserSigns(): Promise<SignWithVerification[]> {
    try {
      await syncAuthToken();
      const user = await getUser();

      if (!user) {
        return [];
      }

      const { data, error } = await db
        .from("signs")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching user signs:", error);
        return [];
      }

      return (data || []).map((sign: Sign) => {
        const verification = Crypto.verifySign(sign);
        return {
          ...sign,
          signatureValid: verification.isValid,
          publicKeyDisplay: verification.publicKeyDisplay,
          verificationError: verification.error,
        };
      });
    } catch (error: any) {
      console.error("Network error fetching user signs:", error);
      return [];
    }
  }

  static async updateSign(
    signId: number,
    updates: Partial<SignFormData>,
  ): Promise<Sign> {
    await syncAuthToken();
    const user = await getUser();

    if (!user) {
      throw new Error("User must be authenticated to update a sign");
    }

    const { data, error } = await db
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

    return data as Sign;
  }

  static async deleteSign(signId: number): Promise<void> {
    await syncAuthToken();
    const user = await getUser();

    if (!user) {
      throw new Error("User must be authenticated to delete a sign");
    }

    const userMetadata = user.user_metadata ?? {};
    const githubUsername = userMetadata?.github_username;
    const isAdmin =
      adminGithubUsername && githubUsername === adminGithubUsername;

    let query = db.from("signs").delete().eq("id", signId);

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
    await syncAuthToken();
    const user = await getUser();

    if (!user) {
      throw new Error("User must be authenticated");
    }

    const userMetadata = user.user_metadata ?? {};
    const githubUsername = userMetadata?.github_username;
    const isAdmin =
      adminGithubUsername && githubUsername === adminGithubUsername;
    if (!isAdmin) {
      throw new Error("Only admin can toggle approval");
    }

    const { data, error } = await db
      .from("signs")
      .update({ approved })
      .eq("id", signId)
      .select()
      .single();

    if (error) {
      console.error("Error toggling approval:", error);
      throw error;
    }

    return data as Sign;
  }

  static async adminRemoveComment(signId: number): Promise<Sign> {
    await syncAuthToken();
    const user = await getUser();

    if (!user) {
      throw new Error("User must be authenticated");
    }

    const userMetadata = user.user_metadata ?? {};
    const githubUsername = userMetadata?.github_username;
    const isAdmin =
      adminGithubUsername && githubUsername === adminGithubUsername;
    if (!isAdmin) {
      throw new Error("Only admin can remove comments");
    }

    const { data, error } = await db
      .from("signs")
      .update({ message: null })
      .eq("id", signId)
      .select()
      .single();

    if (error) {
      console.error("Error removing comment:", error);
      throw error;
    }

    return data as Sign;
  }
}

export class AuthManager {
  static async signInWithGitHub() {
    const { data, error } = await auth.signInWithOAuth({
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
    const { error } = await auth.signOut();

    if (error) {
      console.error("Error signing out:", error);
      throw error;
    }
  }

  static async getCurrentSession(): Promise<UserSession | null> {
    try {
      const { data } = await auth.getUser();
      const user = data.user;

      if (!user) {
        return null;
      }

      const userMetadata = user.user_metadata ?? {};
      const githubUsername = userMetadata?.user_name;
      const githubAvatar = userMetadata?.avatar_url || userMetadata?.picture;
      const isAdmin = !!(
        adminGithubUsername && githubUsername === adminGithubUsername
      );

      return {
        id: user.id,
        github_username: githubUsername,
        github_avatar: githubAvatar,
        is_admin: isAdmin,
      };
    } catch (error: any) {
      console.error("Network error getting user session:", error);
      return null;
    }
  }

  static async isAuthenticated(): Promise<boolean> {
    try {
      const { data } = await auth.getUser();
      return !!data.user;
    } catch (error: any) {
      console.error("Network error checking authentication:", error);
      return false;
    }
  }
}

export class StatusManager {
  static async getStatus(): Promise<UserStatus | null> {
    if (!isSupabaseConfigured) {
      return {
        status: "busy auracoding",
        vanity_id: null,
        updated_at: new Date().toISOString(),
      };
    }
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

  static async updateStatus(
    status?: string,
    vanityId?: string | null,
  ): Promise<UserStatus> {
    await syncAuthToken();
    const user = await getUser();

    if (!user) {
      throw new Error("User must be authenticated to update status");
    }

    const updates: any = {};
    if (status !== undefined) updates.status = status;
    if (vanityId !== undefined) updates.vanity_id = vanityId;

    const { data, error } = await db
      .from("user_status")
      .update(updates)
      .eq("id", 1)
      .select("status, vanity_id, updated_at")
      .single();

    if (error) {
      console.error("Error updating status:", error);
      throw error;
    }

    return data as UserStatus;
  }

  static async getStatusForAdmin(): Promise<{
    canUpdate: boolean;
    currentStatus: UserStatus | null;
  }> {
    const user = await getUser();

    if (!user) {
      return { canUpdate: false, currentStatus: null };
    }

    const userMetadata = user.user_metadata ?? {};
    const githubUsername = userMetadata?.user_name;
    const isAdmin =
      adminGithubUsername && githubUsername === adminGithubUsername;

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

export class ReactionManager {
  static async addReaction(type: string, token: string) {
    if (!isSupabaseConfigured) throw new Error("Supabase not configured");
    const { error } = await db
      .from("reactions")
      .insert([{ reaction_type: type, visitor_token: token }]);
    if (error) throw error;
  }

  static async removeReaction(type: string, token: string) {
    if (!isSupabaseConfigured) throw new Error("Supabase not configured");
    const { error } = await db
      .from("reactions")
      .delete()
      .eq("reaction_type", type)
      .eq("visitor_token", token);
    if (error) throw error;
  }

  static async getUserReactions(token: string): Promise<string[]> {
    if (!isSupabaseConfigured) return [];
    const { data, error } = await db
      .from("reactions")
      .select("reaction_type")
      .eq("visitor_token", token);

    if (error) {
      console.error("Error fetching user reactions:", error);
      return [];
    }
    return (data ?? []).map((r: { reaction_type: string }) => r.reaction_type);
  }

  static async getReactionCounts() {
    if (!isSupabaseConfigured) return {};
    const { data, error } = await db.from("reactions").select("reaction_type");
    if (error) throw error;
    return (data ?? []).reduce(
      (acc: Record<string, number>, curr: { reaction_type: string }) => {
        acc[curr.reaction_type] = (acc[curr.reaction_type] || 0) + 1;
        return acc;
      },
      {},
    );
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
