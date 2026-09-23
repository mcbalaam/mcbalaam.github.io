import santa from "../vanity/santa.png";
import canopy from "../vanity/canopy.png";

// Vite envs are injected at build time. For local dev create .env from .env.example
// For GitHub Pages the workflow injects secrets via VITE_* envs.
export const SUPABASE_URL = (import.meta.env.VITE_SUPABASE_URL as string | undefined)?.trim() || "";
export const SUPABASE_ANON_KEY = (import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined)?.trim() || "";

export const ADMIN_GITHUB_USERNAME =
  ((import.meta.env.VITE_ADMIN_GITHUB_USERNAME as string | undefined)?.trim() || "mcbalaam") as string;

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

// alias для совместимости со старым configReader
export const getVanity = getVanityConfig;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  console.warn(
    "[config] VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY missing — create .env from .env.example or set GitHub Secrets",
  );
}
