import axios from "axios";
import adminStore from "stores/adminStore";

const { REACT_APP_BASE_URL, REACT_APP_PORT } = process.env;

const BASE_URL = `${REACT_APP_BASE_URL}${
  REACT_APP_PORT ? `:${REACT_APP_PORT}` : ""
}`;
const instance = axios.create({
  baseURL: `${BASE_URL}`,
  headers: {
    Authorization: `Bearer *token*`,
  },
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 403) {
      adminStore.logout();
    }
    return Promise.reject(error);
  }
);

const publicAxios = axios.create({
  baseURL: `${BASE_URL}`,
  headers: { "Content-Type": "multipart/form-data" },
});

export { publicAxios, BASE_URL };

export default instance;
