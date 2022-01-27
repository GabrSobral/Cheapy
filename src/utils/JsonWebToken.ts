import { setCookie, parseCookies, destroyCookie } from 'nookies'

const token_name = "@Cheapy:jwtToken";

export const setToken = (token: string) => {
  setCookie(undefined, token_name, token, {
    maxAge: 60 * 40 //40 minutes
  });
}
export const getToken = () => {
  const { "@Cheapy:jwtToken": token } = parseCookies();
  return token;
}
export const removeToken = () => {
  destroyCookie(undefined, token_name);
}