import axios from 'axios'
import { baseUrl } from '../config/baseUrl'

const timeout = 1200

const client = axios.create({
  baseURL: baseUrl,
  timeout: timeout
})

const request = async function (options) {
  const onSuccess = function (response) {
    return response.data
  }
  const onError = function (error) {
    return Promise.reject(error.response || error.message || error.response.status || error.response.data)
  }

  try {
    const response = await client(options)
    return onSuccess(response)
  } catch (error) {
    return onError(error)
  }
}

export default request
