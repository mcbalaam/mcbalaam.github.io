import santa from "../vanity/santa.png";
import canopy from "../vanity/canopy.png";

// Vite inlines import.meta.env.VITE_* statically, so use direct access for inlining
const _env = (import.meta as unknown as { env?: Record<string, string | undefined> })?.env;
const _processEnv = typeof process !== "undefined" ? (process as unknown as { env?: Record<string, string | undefined> })?.env : undefined;

function pickEnv(viteKey: string, bunKey: string): string | undefined {
  const fromMeta = _env?.[viteKey] ?? _env?.[bunKey];
  if (fromMeta !== undefined) return fromMeta.trim();
  const fromProcess = _processEnv?.[viteKey] ?? _processEnv?.[bunKey];
  if (fromProcess !== undefined) return fromProcess.trim();
  return undefined;
}

export const SUPABASE_URL =
  (import.meta.env.VITE_SUPABASE_URL as string | undefined)?.trim() ??
  (import.meta.env.BUN_PUBLIC_SUPABASE_URL as string | undefined)?.trim() ??
  pickEnv("VITE_SUPABASE_URL", "BUN_PUBLIC_SUPABASE_URL") ??
  "";

// keep anon key separate to allow Vite inlining
export const SUPABASE_ANON_KEY =
  (import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined)?.trim() ??
  (import.meta.env.BUN_PUBLIC_SUPABASE_ANON_KEY as string | undefined)?.trim() ??
  pickEnv("VITE_SUPABASE_ANON_KEY", "BUN_PUBLIC_SUPABASE_ANON_KEY") ??
  "";

export const ADMIN_GITHUB_USERNAME =
  ((import.meta.env.VITE_ADMIN_GITHUB_USERNAME as string | undefined)?.trim() ??
  (import.meta.env.BUN_PUBLIC_ADMIN_GITHUB_USERNAME as string | undefined)?.trim() ??
  pickEnv("VITE_ADMIN_GITHUB_USERNAME", "BUN_PUBLIC_ADMIN_GITHUB_USERNAME") ??
  "mcbalaam") as string;

export const ADMIN_CONFIG = {
  githubUsername: ADMIN_GITHUB_USERNAME,
};

export interface VanityConfig {
  path: string;
  x: number;
  y: number;
  angle: number;
}

export const VANITY_CONFIG: Record<string, VanityConfig> = {
  christmas: { path: santa, x: 15, y: -5, angle: 0 },
  canopy: { path: canopy, x: 10, y: 50, angle: 0 },
};

export function getVanityConfig(id: string): VanityConfig | null {
  return VANITY_CONFIG[id] ?? null;
}

export const getVanity = getVanityConfig;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  console.warn(
    "[config] VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY missing — create .env from .env.example or set GitHub Secrets",
  );
}
