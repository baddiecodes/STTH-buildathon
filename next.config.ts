import type { NextConfig } from "next";

const [owner = "", repository = ""] = (process.env.GITHUB_REPOSITORY ?? "").split("/");
const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === "true";
const isUserOrOrgSite = repository.toLowerCase() === `${owner.toLowerCase()}.github.io`;
const basePath = isGitHubPagesBuild && repository && !isUserOrOrgSite ? `/${repository}` : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
