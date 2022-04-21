import axios from 'axios'

let apiBaseUrl = 'https://api.lessborders.com/'

export const getToken = () => {
  const savedToken = useCookie('token', { path: '/' })
  const token = savedToken?.value || null
  console.log(token)
  return token
}

if (process.client) {
  if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
    apiBaseUrl = 'http://localhost:8081/'
  }
}

export default () => {
  const token = getToken()
  return axios.create({
    baseURL: apiBaseUrl,
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
}
