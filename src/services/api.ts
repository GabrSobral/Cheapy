import axios from 'axios'

export const api = axios.create({
  baseURL: "https://localhost:5001/v1"
});

const token = "";

if(token) {
  api.interceptors.request.use(config => {
    config.headers && (config.headers.authorization = `Bearer ${token}`);
    return config;
  });
}