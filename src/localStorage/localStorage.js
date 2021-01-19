export const saveAccessToken = (token) => {
  localStorage.setItem('access_token', token)
}

export const getAccessToken = () => {
  return localStorage.getItem('access_token')
}

export const clearAccessToken = () => {
  localStorage.removeItem('access_token')
}

export const saveRefreshToken = (token) => {
  localStorage.setItem('resfresh_token', token)
}

export const getRefreshToken = () => {
  return localStorage.getItem('resfresh_token')
}

export const clearRefreshToken = () => {
  localStorage.removeItem('resfresh_token')
}

export const clearAllToken = () => {
  clearAccessToken()
  clearRefreshToken()
}
