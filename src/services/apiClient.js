import { API_BASE_URL, STORAGE_KEYS } from '../config/api'

/**
 * Standardized API Client for Campus2Career
 */
export async function apiRequest(endpoint, { method = 'GET', body = null, headers = {}, isAdmin = false } = {}) {
  const tokenKey = isAdmin ? STORAGE_KEYS.ADMIN_TOKEN : STORAGE_KEYS.TOKEN
  const token = localStorage.getItem(tokenKey)

  const reqHeaders = {
    'Content-Type': 'application/json',
    ...headers,
  }

  if (token) {
    reqHeaders['Authorization'] = `Bearer ${token}`
  }

  const url = endpoint.startsWith('http') ? endpoint : `${API_BASE_URL}${endpoint.startsWith('/') ? '' : '/'}${endpoint}`

  const options = {
    method,
    headers: reqHeaders,
  }

  if (body && method !== 'GET' && method !== 'HEAD') {
    options.body = typeof body === 'string' ? body : JSON.stringify(body)
  }

  try {
    const res = await fetch(url, options)
    const data = await res.json().catch(() => ({}))

    if (!res.ok) {
      return {
        success: false,
        status: res.status,
        error: data.message || `Request failed with status ${res.status}`,
        data,
      }
    }

    return {
      success: true,
      status: res.status,
      ...data,
      data,
    }
  } catch (err) {
    return {
      success: false,
      status: 0,
      error: 'Unable to connect to the server. Please ensure the backend is running.',
    }
  }
}

export const apiClient = {
  get: (endpoint, options = {}) => apiRequest(endpoint, { ...options, method: 'GET' }),
  post: (endpoint, body, options = {}) => apiRequest(endpoint, { ...options, method: 'POST', body }),
  put: (endpoint, body, options = {}) => apiRequest(endpoint, { ...options, method: 'PUT', body }),
  delete: (endpoint, options = {}) => apiRequest(endpoint, { ...options, method: 'DELETE' }),
}

export default apiClient
