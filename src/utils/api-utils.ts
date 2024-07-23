import config from '../constants/config'

let token: string | null = null
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
    throw new Error(`Failed to ${method} ${fullPath}`)
  }

  return await response.json()
}

const setToken = async (newToken: string) => {
  token = newToken
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
  setToken,
  post,
  put,
  get,
  del
}

export default ApiUtils
