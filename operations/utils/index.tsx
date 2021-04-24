import Cookies from "universal-cookie"

const cookies = new Cookies()
export const getCookie = cookie => {
  return cookies.get(cookie)
}
