const getQueryParam = (queryParamName: string) => {
  const urlSearchParams = new URLSearchParams(window.location.search)
  return urlSearchParams.get(queryParamName)
}

export const getBaseDomain = () => getQueryParam('baseDomain') || ''
