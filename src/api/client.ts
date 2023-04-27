import axios from 'axios'
import { getBaseDomain, getIsSecure } from './apiConfig'

export const client = axios.create({
  baseURL: `http${getIsSecure() ? 's' : ''}://${getBaseDomain()}`,
  headers: { 'content-type': 'application/x-www-form-urlencoded' }
})
