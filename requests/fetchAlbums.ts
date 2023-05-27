import { IAlbum } from "~/interfaces/IAlbum";

export function fetchAlbums(userId: number) {
  const api = `https://jsonplaceholder.typicode.com/albums?userId=${userId}`;
  return $fetch<IAlbum[]>(api);
}
