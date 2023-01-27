import http from "./httpService";
import { apiUrl } from "../config.json";

const API_ENDPOINT = apiUrl + "/movies";
export function getMovies() {
  return http.get(API_ENDPOINT);
}

export function deleteMovie(movieId) {
  return http.delete(API_ENDPOINT + "/" + movieId);
}
