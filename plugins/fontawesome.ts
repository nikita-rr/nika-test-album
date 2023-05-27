import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faPlus, faMinus, faStar as fasStart, faXmark } from "@fortawesome/free-solid-svg-icons";

library.add(faStar, faPlus, faMinus, fasStart, faXmark);

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false;

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("fa", FontAwesomeIcon);
});
