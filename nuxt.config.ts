
export default defineNuxtConfig({
  css: [
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
