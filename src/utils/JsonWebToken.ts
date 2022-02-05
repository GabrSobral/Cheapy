import { setCookie, parseCookies, destroyCookie } from 'nookies'

const token_name = "@Cheapy:jwtToken";

export const setToken = (token: string) => {
  setCookie(undefined, token_name, token, {
    maxAge: 60 * 60 * 24 * 4 //4 days
  });
}
export const getToken = () => {
  const { "@Cheapy:jwtToken": token } = parseCookies();
  return token;
}
export const removeToken = () => {
  destroyCookie(undefined, token_name);
}