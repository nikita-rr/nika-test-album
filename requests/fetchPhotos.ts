import { IPhoto } from "~/interfaces/IPhoto";

export function fetchPhotos(albumId: number) {
  const api = `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`;
  return $fetch<IPhoto[]>(api);
}
