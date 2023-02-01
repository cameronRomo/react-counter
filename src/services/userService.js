import http from "./httpService";
// import { apiUrl } from "../config.json";

const API_ENDPOINT = "http://localhost:3900/api" + "/users";

export function register(user) {
  return http.post(API_ENDPOINT, {
    email: user.username,
    password: user.password,
    name: user.name,
  });
}
