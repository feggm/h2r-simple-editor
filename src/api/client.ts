import axios from 'axios'
import { getBaseDomain } from './apiConfig'

export const client = axios.create({
  baseURL: `http://${getBaseDomain()}`,
  headers: { 'content-type': 'application/x-www-form-urlencoded' }
})
