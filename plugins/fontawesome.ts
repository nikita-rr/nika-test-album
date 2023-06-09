import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faStar, faFaceSadCry } from "@fortawesome/free-regular-svg-icons";
import { faPlus, faMinus, faStar as fasStart, faXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";

library.add(faStar, faPlus, faMinus, fasStart, faXmark, faFaceSadCry, faSpinner);

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false;

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("fa", FontAwesomeIcon);
});
