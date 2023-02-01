import http from "./httpService";
// import { apiUrl } from "../config.json";

const API_ENDPOINT = "http://localhost:3900/api" + "/movies";
export function getMovies() {
  return http.get(API_ENDPOINT);
}

export function getMovie(movieId) {
  return http.get(API_ENDPOINT + "/" + movieId);
}

export function saveMovie(movieId) {
  return http.get(API_ENDPOINT + "/" + movieId);
}

export function deleteMovie(movieId) {
  return http.delete(API_ENDPOINT + "/" + movieId);
}
