import { IUser } from "~/interfaces/IUser";

export function fetchUsers() {
  const api = "http://jsonplaceholder.typicode.com/users";
  return $fetch<IUser[]>(api);
}
