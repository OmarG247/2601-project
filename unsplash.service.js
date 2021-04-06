const API_URL = "https://api.unsplash.com/";
const API_TOKEN = "4iaJJNiV7jsWrxbFDeEC4OvWQKa9FfRnaO6I6gwO-nc";

export const searchImages = (query, page) =>
  fetch(
    `${API_URL}/search/photos?client_id=${API_TOKEN}&query=${query.replace(
      " ",
      "%20"
    )}&page=${page}`
  ).then((res) => res.json());
