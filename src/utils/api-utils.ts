import config from '../constants/config'

let token: string | null = localStorage.getItem('token')
const url = config.api.URL ?? ''

const request = async (method: string, path: string, body?: any) => {
  const fullPath = url + path
  const headers: HeadersInit = {
    'Content-Type': 'application/json'
  }

  if (token) {
    headers.Authorization = token
  }

  const response = await fetch(fullPath, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined
  })

  if (!response.ok) {
    if (response.body) {
      const errorResponse = await response.json()
      if (errorResponse.message) {
        if (errorResponse.reason) {
          throw new Error(`${errorResponse.message}: ${errorResponse.reason}`)
        }
        throw new Error(errorResponse.message)
      }
    }

    throw new Error(`Failed to ${method} ${fullPath}`)
  }

  return await response.json()
}

const getToken = () => token

const setToken = (newToken: string) => {
  token = newToken
  localStorage.setItem('token', newToken)
}

const post = async (path: string, body: any) => {
  return await request('POST', path, body)
}

const put = async (path: string, body: any) => {
  return await request('PUT', path, body)
}

const get = async (path: string) => {
  return await request('GET', path)
}

const del = async (path: string) => {
  return await request('DELETE', path)
}

const ApiUtils = {
  getToken,
  setToken,
  post,
  put,
  get,
  del
}

export default ApiUtils
