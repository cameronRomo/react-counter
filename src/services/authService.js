import http from "./httpService";
// import { apiUrl } from "../config.json";

const API_ENDPOINT = "http://localhost:3900/api" + "/auth";

export function login(email, password) {
  return http.post(API_ENDPOINT, { email, password });
}
