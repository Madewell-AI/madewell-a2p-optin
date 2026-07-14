import { fileURLToPath } from "node:url";
import path from "node:path";
import type { NextConfig } from "next";

// Pin Turbopack's workspace root to this app directory. Without this, a dev server
// started in a git worktree walks up to the nearest parent lockfile, treats that parent
// as the workspace root, and then watches/indexes every sibling worktree (each a full
// checkout with its own node_modules + .next). Turbopack writes build output into the
// tree it is watching, retriggering rebuilds in an infinite write loop that exhausts RAM
// and can hard-hang macOS. See ~/CLAUDE.md "Worktrees + dev servers".
const appRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    root: appRoot,
  },
  /* config options here */
};

export default nextConfig;
