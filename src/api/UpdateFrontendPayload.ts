export type UpdateFrontendPayload = {
  version: string
  projects: Record<string, Project>
  settings: {
    selectedProject: string
    app_ip_address: string
    app_port: string
    output_background_colour: string
    output_cursor_show: string
    youtube_polling_interval: number
  }
  ip_addresses: string[]
}

type Project = {
  name: string
  theme: string
  cues: {
    status: 'offair' | 'onair' | 'coming' | 'cuedoff'
    type: 'lower_third'
    line_one: string
    line_two: string
    position: string
    id: string
    label?: string
  }[]
  themes: unknown
}
