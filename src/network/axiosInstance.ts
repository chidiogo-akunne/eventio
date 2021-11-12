import axios from "axios";
import { logoutUser } from "../context/auth/authProvider";

//create axios instance

const baseURL = process.env.REACT_APP_BASE_URL;
const APIKey = process.env.REACT_APP_API_KEY!;

const instance = axios.create({
  baseURL,
  headers: { APIKey, "Content-Type": "application/json" },
});

instance.interceptors.request.use(function (config) {
  const token = window.localStorage.getItem("token") || "";

  config.headers!.Authorization = token;

  return config;
});

instance.interceptors.response.use(undefined, function (error) {
  if (error.response && error.response.status === 403) {
    // Todo: Attempt to login with Refresh token?

    // For now, we just logout
    logoutUser();
    window.location.reload();
  }

  return Promise.reject(error);
});

export default instance;
