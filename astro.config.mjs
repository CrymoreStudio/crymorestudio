import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
// import { SITE_URL } from "./src/data/config";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap()],
  site: "http://crymore.studio",
  server: {
    port: process.env.PORT || 3000
  },
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "nord",
      wrap: false
    }
  },
  output: "server",
  adapter: node({
    mode: "middleware"
  })
});