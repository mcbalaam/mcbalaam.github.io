import { createClient } from "@supabase/supabase-js";
import {
  SUPABASE_URL,
  SUPABASE_ANON_KEY,
  ADMIN_GITHUB_USERNAME,
} from "../config";

// Типы данных для таблицы signs
export interface Sign {
  id: number;
  uuid: string;
  github_username?: string;
  telegram_id?: string;
  message?: string;
  is_anonymous: boolean;
  approved: boolean;
  created_at: string;
  user_id?: string; // ID пользователя из auth.users
}

export interface SignFormData {
  message?: string;
  is_anonymous: boolean;
}

export interface UserSession {
  id: string;
  email?: string;
  github_username?: string;
  github_avatar?: string;
  telegram_id?: string;
  is_admin: boolean;
}

// Конфигурация Supabase
const supabaseUrl = SUPABASE_URL;
const supabaseAnonKey = SUPABASE_ANON_KEY;
const adminGithubUsername = ADMIN_GITHUB_USERNAME;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    "Supabase environment variables are not set. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env file",
  );
}

export const supabase = createClient(supabaseUrl || "", supabaseAnonKey || "");

// Функции для работы с сигнами
export class SignManager {
  // Получить все одобренные сигны
  static async getApprovedSigns(): Promise<Sign[]> {
    const { data, error } = await supabase
      .from("signs")
      .select("*")
      .eq("approved", true)
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching approved signs:", error);
      throw error;
    }

    return data || [];
  }

  // Создать новую сигну
  static async createSign(formData: SignFormData): Promise<Sign> {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      throw new Error("User must be authenticated to create a sign");
    }

    // Получаем информацию о пользователе из метаданных
    const userMetadata = user.user_metadata;
    const githubUsername = userMetadata.github_username;

    // Проверяем, является ли пользователь админом
    const isAdmin =
      adminGithubUsername && githubUsername === adminGithubUsername;

    const signData = {
      uuid: user.id,
      github_username: githubUsername,
      telegram_id: userMetadata.telegram_id,
      message: formData.message || null,
      is_anonymous: formData.is_anonymous,
      approved: isAdmin, // Админы сразу одобрены
      user_id: user.id,
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

  // Получить сигны текущего пользователя
  static async getUserSigns(): Promise<Sign[]> {
    const {
      data: { user },
    } = await supabase.auth.getUser();

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

    return data || [];
  }

  // Обновить сигну (только свою)
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

  // Удалить сигну (пользователь может удалить только свою, админ - любую)
  static async deleteSign(signId: number): Promise<void> {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      throw new Error("User must be authenticated to delete a sign");
    }

    // Проверяем, является ли пользователь админом
    const userMetadata = user.user_metadata;
    const githubUsername = userMetadata?.github_username;
    const isAdmin =
      adminGithubUsername && githubUsername === adminGithubUsername;

    let query = supabase.from("signs").delete().eq("id", signId);

    // Если не админ, может удалить только свою сигну
    if (!isAdmin) {
      query = query.eq("user_id", user.id);
    }

    const { error } = await query;

    if (error) {
      console.error("Error deleting sign:", error);
      throw error;
    }
  }

  // Админ: одобрить/скрыть сигну
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

    // Проверяем, является ли пользователь админом
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

  // Админ: удалить комментарий (оставить сигну без сообщения)
  static async adminRemoveComment(signId: number): Promise<Sign> {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      throw new Error("User must be authenticated");
    }

    // Проверяем, является ли пользователь админом
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

// Функции для аутентификации
export class AuthManager {
  // Вход через GitHub
  static async signInWithGitHub() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: window.location.origin,
        scopes: "user:email,read:user", // Запрашиваем доступ к email и профилю
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

  // Вход через Telegram (нужно настроить кастомный провайдер)
  static async signInWithTelegram() {
    // Для Telegram потребуется кастомная реализация через Telegram Login Widget
    // и обработка callback на сервере
    console.warn("Telegram login not implemented yet");
    throw new Error("Telegram login not implemented yet");
  }

  // Выход
  static async signOut() {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error("Error signing out:", error);
      throw error;
    }
  }

  // Получить текущую сессию
  static async getCurrentSession(): Promise<UserSession | null> {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return null;
    }

    const userMetadata = user.user_metadata;
    const githubUsername = userMetadata?.github_username;
    const githubAvatar = userMetadata?.avatar_url || userMetadata?.picture;
    const isAdmin =
      adminGithubUsername && githubUsername === adminGithubUsername;

    return {
      id: user.id,
      email: user.email,
      github_username: githubUsername,
      github_avatar: githubAvatar,
      telegram_id: userMetadata?.telegram_id,
      is_admin: isAdmin,
    };
  }

  // Проверить, авторизован ли пользователь
  static async isAuthenticated(): Promise<boolean> {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    return !!user;
  }
}

// Экспортируем основные функции для удобства
export const getApprovedSigns = SignManager.getApprovedSigns;
export const createSign = SignManager.createSign;
export const getUserSigns = SignManager.getUserSigns;
export const updateSign = SignManager.updateSign;
export const deleteSign = SignManager.deleteSign;
export const adminToggleApproval = SignManager.adminToggleApproval;
export const adminRemoveComment = SignManager.adminRemoveComment;

export const signInWithGitHub = AuthManager.signInWithGitHub;
export const signInWithTelegram = AuthManager.signInWithTelegram;
export const signOut = AuthManager.signOut;
export const getCurrentSession = AuthManager.getCurrentSession;
export const isAuthenticated = AuthManager.isAuthenticated;
