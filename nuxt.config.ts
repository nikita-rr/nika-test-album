// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@element-plus/nuxt", //Сборщик автоматически подключает только текомпонены которые используются в коде (весь UI загружен НЕ будет)
  ],
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
    ],
  },
});
