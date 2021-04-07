import { APP_UNSPLASH_API_TOKEN } from "@env";
const API_URL = "https://api.unsplash.com/";

export const searchImages = (query, page) =>
  fetch(
    `${API_URL}/search/photos?client_id=${APP_UNSPLASH_API_TOKEN}&query=${query.replace(
      " ",
      "%20"
    )}&page=${page}`
  ).then((res) => res.json());
