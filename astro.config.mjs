import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import basicSsl from '@vitejs/plugin-basic-ssl'

// import { SITE_URL } from "./src/data/config";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap()],
  site: "http://crymore.studio",
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
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true
    }
  }
});