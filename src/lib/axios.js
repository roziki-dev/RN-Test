import axios from 'axios'
import { baseUrl } from '../config/baseUrl'

const timeout = 1200

const request = axios.create({
  baseURL: baseUrl,
  timeout: timeout
})

export default request
