import http from "./httpService";
// import { apiUrl } from "../config.json";

const API_ENDPOINT = "http://localhost:3900/api" + "/movies";

function movieUrl(id) {
  return `${API_ENDPOINT}/${id}`;
}

export function getMovies() {
  return http.get(API_ENDPOINT);
}

export function getMovie(movieId) {
  return http.get(movieUrl(movieId));
}

export function saveMovie(movie) {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    http.put(movieUrl(movie._id), body);
  }

  return http.post(API_ENDPOINT, movie);
}

export function deleteMovie(movieId) {
  return http.delete(movieUrl(movieId));
}
