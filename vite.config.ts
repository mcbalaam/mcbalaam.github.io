import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";

function stripRazdorFontFace(): Plugin {
  return {
    name: "strip-razdor-font-face",
    enforce: "pre",
    transform(code, id) {
      if (!id.includes("@mcbalaam/razdor-ui") || !id.endsWith(".css")) return;
      return code.replace(/@font-face\s*\{[^}]*NunitoSans[^}]*\}/g, "");
    },
  };
}

export default defineConfig({
  resolve: {
    dedupe: ["react", "react-dom", "lucide-react"],
  },
  optimizeDeps: { exclude: ["@mcbalaam/razdor-ui"] },
  plugins: [
    stripRazdorFontFace(),
    react()
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (
            id.includes("node_modules/react/") ||
            id.includes("node_modules/react-dom/") ||
            id.includes("node_modules/scheduler/")
          ) {
            return "vendor-core";
          }

          if (
            id.includes("node_modules/@supabase/") ||
            id.includes("node_modules/@fingerprintjs/") ||
            id.includes("node_modules/@noble/")
          ) {
            return "vendor-utils";
          }

          if (
            id.includes("node_modules/@mcbalaam/razdor-ui/") ||
            id.includes("node_modules/lucide-react/")
          ) {
            return "vendor-ui";
          }

          if (id.includes("node_modules")) {
            return "vendor-other";
          }
        },
      },
    },
    chunkSizeWarningLimit: 600,
    minify: "terser",
  },
});
