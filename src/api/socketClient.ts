import { io } from 'socket.io-client'
import { getBaseDomain, getIsSecure } from './apiConfig'
import mitt from 'mitt'
import type { UpdateFrontendPayload } from './UpdateFrontendPayload'

const socket = io(`ws${getIsSecure() ? 's' : ''}://${getBaseDomain()}`)

export const socketEvents = mitt<{
  updateFrontend: UpdateFrontendPayload
  print: any
  disconnect: void
  connect: void
}>()

socket.on('updateFrontend', (data) => {
  socketEvents.emit('updateFrontend', data)
})

socket.on('print', (data) => {
  socketEvents.emit('print', data)
})

socket.on('disconnect', () => {
  socketEvents.emit('disconnect')
})

socket.on('connect', () => {
  socketEvents.emit('connect')
})
