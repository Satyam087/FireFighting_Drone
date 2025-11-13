import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import fs from "fs";

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer(),
          ),
          await import("@replit/vite-plugin-dev-banner").then((m) =>
            m.devBanner(),
          ),
        ]
      : []),
    // copy top-level _redirects into the build output so Netlify SPA routing works
    // This runs after the build is finished.
    {
      name: 'copy-redirects',
      apply: 'build',
      closeBundle: () => {
        try {
          const src = path.resolve(import.meta.dirname, '..', '_redirects');
          const destDir = path.resolve(import.meta.dirname, 'dist', 'public');
          if (fs.existsSync(src) && fs.existsSync(destDir)) {
            fs.copyFileSync(src, path.resolve(destDir, '_redirects'));
          }
        } catch (e) {
          // ignore copy failures in environments where filesystem is restricted
        }
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
