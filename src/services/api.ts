import axios from 'axios'
import { getToken, removeToken, setToken } from '../utils/JsonWebToken';
import { GetUserId, IsTokenExpired } from '../utils/parseJWT';
import { getRefreshToken } from '../utils/RefreshToken';

export const api = axios.create({
  baseURL: "https://localhost:5001/v1"
});

const token = getToken();
const refreshToken = getRefreshToken();

token && api.interceptors.request.use(async config => {
  config.headers && (config.headers.authorization = `Bearer ${token}`);

  if(refreshToken && IsTokenExpired()) {
    const { data } = 
      await axios.post(`https://localhost:5001/v1/refresh-token/${refreshToken}`,
      { userId: GetUserId() },
      { headers: { Authorization : `Bearer ${token}` }}
    );
    removeToken();
    setToken(data.token);
  }

  return Promise.resolve(config);
}, (error) => api(error.config));