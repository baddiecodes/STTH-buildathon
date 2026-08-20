# DFlow × Superteam Thailand Buildathon

Single-screen landing page and Build Hub, packaged as a standard Next.js static export.

## Run locally

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Deploy to GitHub Pages

1. Create a GitHub repository and upload this folder to the repository root.
2. Push to the `main` branch.
3. In **Settings → Pages**, set **Source** to **GitHub Actions**.
4. Open the **Actions** tab and wait for “Deploy to GitHub Pages” to finish.

The included workflow builds the site into `out/`, handles project-repository base paths automatically, and deploys both `/` and `/rules/` without a server.

## Deploy to Vercel

1. Import the repository in Vercel.
2. Keep **Framework Preset** set to **Next.js**.
3. Leave the build and output settings on their defaults.
4. Deploy.

No Vinext, Vite, Cloudflare, Wrangler, database, or custom install configuration is required.

## Other static hosts

Run `npm run build`, then deploy the generated `out/` folder. On non-GitHub hosts the site builds at the domain root by default.
