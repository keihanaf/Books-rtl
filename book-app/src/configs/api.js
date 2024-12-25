import axios from "axios";
import { getCookie, setCookie, removeCookie } from "../utils/cookie.js";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (request) => {
    const token = getCookie("token");
    if (token) {
      request.headers["Authorization"] = `Bearer ${token}`;
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response) => {
    if (response.data?.token) {
      setCookie("token", response.data.token, 7);
    }
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      removeCookie("token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  },
);

export default api;
