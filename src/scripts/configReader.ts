import { readFileSync } from "fs";
import { parse } from "smol-toml";

export interface VanityConfig {
  path: string;
  x: number;
  y: number;
  angle: number;
}

interface VanityToml {
  vanity: Record<string, VanityConfig>;
}

const raw = parse(readFileSync("config.toml", "utf-8")) as unknown as VanityToml;
export const VANITY_CONFIG = raw.vanity;

export function getVanity(id: string): VanityConfig | null {
  return VANITY_CONFIG[id] ?? null;
}