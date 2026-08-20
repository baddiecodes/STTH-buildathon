# DFlow × Superteam Thailand Buildathon

> Build what happens after the swap.

A focused buildathon for builders creating useful products with DFlow on Solana. The goal is not another swap screen—it is the game, agent, consumer app, payment flow, or product experience that becomes possible after the swap.

**[Apply now](https://forms.gle/WTkHAkujTB1HWfKb6)** · **[View the live site](https://dflow-thailand-buildathon.mewtwo792796.chatgpt.site)**

## Event details

| | |
| --- | --- |
| Build window | Aug 21–31, 2026 |
| Submission deadline | Aug 31, 2026 · 23:59 ICT |
| Demo Day | Sep 3, 2026 · Bangkok |
| Prize pool | 1,000 USDC |
| Team size | 1–4 builders |

## What to build

Use DFlow to create a useful product experience that begins where the swap ends.

We are looking for:

- A clear user problem and a product people could genuinely use.
- A meaningful DFlow integration, not a reskinned swap interface.
- Creative thinking, clarity, usefulness, and evidence that you shipped.
- A working demo, product write-up, and public demo link or code repository.

Projects already released to users are not eligible. New products and new ideas are the point.

## DFlow quick start

DFlow is a DEX aggregator API that routes swaps across Solana venues and re-optimizes routes at execution through JIT Routing.

For the buildathon:

- Start with [What is DFlow?](https://pond.dflow.net/get-started/what-is-dflow).
- Use `devquote.api.DFlow.net`.
- The development endpoint is free, limited to 1 TPS, and requires no API key.
- Builders can add `platformFeeBps` and retain 100% of the platform fee.
- Gas fees can be sponsored to create a smoother product experience.

Core integration flow:

1. Call the `order` endpoint with the input mint, output mint, amount, and user public key.
2. Receive a ready-to-sign transaction.
3. Ask the user to sign.
4. Submit the signed transaction through a Solana RPC.

## Workshops

### Workshop 01 — From Quote to Signed Swap

Understand DFlow, JIT Routing, the quote-to-swap flow, monetization, and gas-sponsored UX.

- [Workshop page](https://luma.com/vxj5v1pu)
- The recap is available inside **Build Hub → Workshops** on the site.

### Workshop 02 — Ship a Seeker Game Economy with DFlow

Learn how a mobile game economy can turn in-game currency into SOL and become a starting point for your own product.

- [Register on Luma](https://luma.com/zsvaojvq)

## Buildathon rules

The full Rules, Q&A, Workshops, recap, and Docs are available on the [`/rules/`](https://dflow-thailand-buildathon.mewtwo792796.chatgpt.site/rules) page.

## Run locally

Requirements: Node.js 20 or newer and npm.

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Create a production build with:

```bash
npm run build
```

The site is exported as static files into `out/`.

## Deploy to Vercel

1. Push this folder to the root of a GitHub repository.
2. Import the repository into Vercel.
3. Keep **Framework Preset** set to **Next.js**.
4. Leave the build and output settings on their defaults.
5. Deploy.

No Vinext, Vite, Cloudflare, Wrangler, database, or custom install configuration is required.

## Deploy to GitHub Pages

1. Push the project to the `main` branch.
2. Open **Settings → Pages** in the GitHub repository.
3. Set **Source** to **GitHub Actions**.
4. Wait for the included **Deploy to GitHub Pages** workflow to complete.

The workflow handles repository base paths automatically and deploys both `/` and `/rules/`.

## Where to edit the site

| File | Controls |
| --- | --- |
| `app/page.tsx` | Landing-page text, dates, prize, buttons, brands, and social links |
| `app/rules/RulesClient.tsx` | Rules, Q&A, workshops, recap, Docs tab, and Build Hub footer |
| `app/Countdown.tsx` | Submission deadline and countdown copy |
| `app/globals.css` | Colors, typography, motion, footer sizing, layout, and responsive styles |
| `app/layout.tsx` | Browser title, description, favicon, and social-sharing metadata |
| `public/` | DFlow logo, Superteam Thailand logo, favicon, and social preview image |

## Project structure

```text
app/
├── Countdown.tsx
├── globals.css
├── layout.tsx
├── page.tsx
├── site-path.ts
└── rules/
    ├── page.tsx
    └── RulesClient.tsx
public/
├── dflow-mark.png
├── superteam-thailand.png
├── favicon.svg
└── og.png
.github/workflows/deploy-pages.yml
next.config.ts
package.json
```

## Tech stack

- Next.js
- React
- TypeScript
- CSS animations and responsive layouts
- Static export for Vercel and GitHub Pages

## Superteam Thailand

- [X](https://x.com/superteamth)
- [Instagram](https://instagram.com/superteamthailand)
- [Telegram](https://t.me/superteamth)

Built by Superteam Thailand with DFlow for builders who are ready to ship.
