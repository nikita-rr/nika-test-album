import { existsSync, readFileSync } from "fs";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    //Разделяю стили для более быстрой сборки
    "~/styles/_index.scss",
    "~/styles/components/_index.scss",
  ],
  build: {
    transpile: [
      "@fortawesome/fontawesome-svg-core",
      "@fortawesome/vue-fontawesome",
      "@fortawesome/free-regular-svg-icons",
      "@fortawesome/free-solid-svg-icons",
    ],
  },
});
