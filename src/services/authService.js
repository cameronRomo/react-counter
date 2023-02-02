import jwtDecode from "jwt-decode";
import http from "./httpService";
// import { apiUrl } from "../config.json";

const API_ENDPOINT = "http://localhost:3900/api" + "/auth";
const TOKEN_KEY = "token";

http.setJWT(getJWT());

export async function login(email, password) {
  const { data: jwt } = await http.post(API_ENDPOINT, { email, password });
  localStorage.setItem(TOKEN_KEY, jwt);
}

export async function logout() {
  localStorage.removeItem(TOKEN_KEY);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(TOKEN_KEY);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

export function loginWithJwt(jwt) {
  localStorage.setItem(TOKEN_KEY, jwt);
}

export function getJWT() {
  return localStorage.getItem(TOKEN_KEY);
}

export default {
  login,
  logout,
  getCurrentUser,
  loginWithJwt,
  getJWT,
};
