import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// import { SITE_URL } from "./src/data/config";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap()],
  site: "https://crymore.studio",
  server: {
    port: parseInt(process.env.PORT) || 3000,
    host: true
  },
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "nord",
      wrap: false
    }
  },
  // output: "server",
  // adapter: node({
  //   mode: "standalone"
  // })
  output: "static",
});