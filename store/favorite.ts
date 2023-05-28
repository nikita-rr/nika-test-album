// import { defineStore } from "pinia";
import { IPhoto } from "~/interfaces/IPhoto";

import { defineStore } from "pinia";

export const useFavoriteStore = defineStore("filterStore", () => {
  const cookie = useCookie<IPhoto[]>("favoriteList");

  const favoriteList = ref<IPhoto[]>(cookie.value || []);

  function getFavoriteList() {
    return favoriteList;
  }

  function isExistsInFavorite(id: number) {
    return !!favoriteList.value.find((item) => item.id === id);
  }

  function addToFavorite(value: IPhoto) {
    favoriteList.value.push(value);
    _refreshCookie();
  }

  function removeFromFavorite(id: number) {
    favoriteList.value = favoriteList.value.filter((item) => item.id !== id);
    _refreshCookie();
  }

  function _refreshCookie() {
    cookie.value = favoriteList.value;
  }

  return {
    isExistsInFavorite,
    addToFavorite,
    removeFromFavorite,
    getFavoriteList,
  };
});
