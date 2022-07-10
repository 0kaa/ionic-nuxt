import { defineNuxtConfig } from "nuxt";
export default defineNuxtConfig({
  modules: ["nuxt-ionic"],
  ionic: {
    integrations: {
      //
    },
    css: {
      core: true,
      basic: true,
      utilities: true,
    },
  },
});
