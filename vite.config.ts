import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
  plugins: [
    react(),
ViteImageOptimizer({
      test: /\.(jpe?g|png|gif|tiff|webp|svg|avif)$/i,
exclude: 'canopy.png',
      png: { quality: 80 },
      jpeg: { quality: 80 },
      jpg: { quality: 80 },
      webp: { quality: 80 },
      avif: { quality: 70 },
    }),
  ],
    build: {
    rollupOptions: {
      output: {
manualChunks: (id) => {
  if (id.includes('node_modules/react/') || 
      id.includes('node_modules/react-dom/') ||
      id.includes('node_modules/framer-motion/') ||
      id.includes('node_modules/@react-spring/')) {
    return 'vendor-core'
  }

  if (id.includes('node_modules/@supabase/') ||
      id.includes('node_modules/@fingerprintjs/') ||
      id.includes('node_modules/@noble/')) {
    return 'vendor-utils'
  }

  if (id.includes('node_modules/@fortawesome/')) {
    return 'vendor-ui'
  }

  if (id.includes('node_modules')) {
    return 'vendor-other'
  }
}
      }
    },
    chunkSizeWarningLimit: 600,
    minify: 'terser',
  }
});