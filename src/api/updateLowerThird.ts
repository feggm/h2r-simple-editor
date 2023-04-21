import { projectId } from './apiData'
import { client } from './client'

export const updateLowerThird = ({
  lowerThirdId,
  attribute,
  text
}: {
  lowerThirdId: string
  attribute: 'line_one' | 'line_two'
  text: string
}) => {
  return client.post(`/h2r-graphics/${projectId.value}/updateCue/${lowerThirdId}`, {
    update: JSON.stringify({
      [attribute]: text
    })
  })
}
