/**
 * HTTP Request Axios Instance
 */
import axios, { AxiosResponse } from 'axios'

export const fetcher = (url: string): Promise<AxiosResponse> =>
  axios.get(url).then((res) => res.data)

// Create axios instance with default config
const instance = axios.create({
  baseURL: 'http://localhost:3500/v1.0',
})

// Axios request interceptors
instance.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Axios response interceptors
instance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default instance
