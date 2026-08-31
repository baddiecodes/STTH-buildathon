import type { Metadata } from "next";
import "./globals.css";
import { sitePath } from "./site-path";

const githubOwner = (process.env.GITHUB_REPOSITORY ?? "").split("/")[0] ?? "";
const pagesOrigin = process.env.GITHUB_ACTIONS === "true" && githubOwner
  ? `https://${githubOwner}.github.io`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(pagesOrigin),
  title: "BUILDATHON | DFlow × Superteam Thailand",
  description: "Build what happens after the swap. Aug 21 to Sep 2, 2026. Demo Day Sep 3 in Bangkok. 1,000 USDC prize pool.",
  openGraph: {
    title: "BUILDATHON | DFlow × Superteam Thailand",
    description: "Build what happens after the swap.",
    type: "website",
    images: [{ url: sitePath("/og.png"), width: 1731, height: 909, alt: "DFlow × Superteam Thailand Buildathon" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BUILDATHON | DFlow × Superteam Thailand",
    description: "Build what happens after swap.",
    images: [sitePath("/og.png")],
  },
  icons: { icon: sitePath("/favicon.ico"), shortcut: sitePath("/favicon.ico") },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
