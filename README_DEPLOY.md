Deploy notes

This repository contains a Vite React client in `client/` and an optional Express API in `server/`.

Static-only deploy (recommended for Netlify / Vercel):

1. Build the client:

```bash
npm ci
npm run build
```

2. Deploy the repository to Netlify or Vercel. The repo includes `netlify.toml` (Netlify) and `vercel.json` (Vercel) configured to publish the built files from `dist/public`.

Notes:
- The `build` script runs the Vite client build and outputs to `dist/public` (as configured in `vite.config.ts`).
- SPA routing is handled via a `_redirects` file (root) and `netlify.toml`/`vercel.json` routes.

Optional: if you need the API server hosted alongside the client, you must convert the Express `server/` to serverless functions (one function per API route) or host the server separately (Heroku, Render, Fly.io, Railway) and update the client to call the API host.
