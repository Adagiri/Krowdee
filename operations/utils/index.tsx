import Cookies from "universal-cookie";

const cookies = new Cookies();

const isBrowser = typeof window !== "undefined";
export const getCookie = (cookie) => {
  return cookies.get(cookie);
};
