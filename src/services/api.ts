import axios from 'axios'
import { getToken } from '../utils/JsonWebToken';

export const api = axios.create({
  baseURL: "https://localhost:5001/v1"
});

const token = getToken();

if(token) {
  api.interceptors.request.use(config => {
    config.headers && (config.headers.authorization = `Bearer ${token}`);
    return config;
  });
}