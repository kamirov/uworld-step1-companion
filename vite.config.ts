import { defineConfig } from "vite";
import { crx } from "@crxjs/vite-plugin";
import manifest from "./manifest.json";

export default defineConfig({
  plugins: [crx({ manifest })],
  build: {
    // Emit SVGs as files so content scripts can load them via chrome.runtime.getURL
    // (data: URLs are blocked by UWorld's CSP).
    assetsInlineLimit: 0,
  },
});
