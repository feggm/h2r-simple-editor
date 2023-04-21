import { computed, ref } from 'vue'
import { socketEvents } from './socketClient'
import type { UpdateFrontendPayload } from './UpdateFrontendPayload'

export const isConnected = ref<boolean>(false)
socketEvents.on('connect', () => (isConnected.value = true))
socketEvents.on('disconnect', () => (isConnected.value = false))

export const apiData = ref<UpdateFrontendPayload | null>(null)
socketEvents.on('updateFrontend', (data) => {
  apiData.value = data
})

export const projectId = computed(() => {
  if (!apiData.value) return ''
  const keys = Object.keys(apiData.value.projects)
  if (!keys.length) return ''

  return keys[0]
})

export const lowerThirds = computed(() => {
  if (!apiData.value) return []

  const project = apiData.value.projects[projectId.value]
  return project.cues.filter((cue) => cue.type === 'lower_third')
})
