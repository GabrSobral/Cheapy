import { setCookie, parseCookies, destroyCookie } from 'nookies'

const token_name = "@Cheapy:jwtToken";

export const setRefreshToken = (token: string) => {
  setCookie(undefined, token_name, token, {
    maxAge: 60 * 60 * 24 * 4 //4 days
  });
}
export const getToken = () => {
  const { "@Cheapy:jwtToken": refreshToken } = parseCookies();
  return refreshToken;
}
export const removeRefreshToken = () => {
  destroyCookie(undefined, token_name);
}