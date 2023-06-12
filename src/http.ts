/* eslint-disable unused-imports/no-unused-vars */
import qs from 'qs'
import * as auth from './auth-provider'
import { useAuth } from './context/auth-context'
import { apiUrl } from '@/api/config'

interface Config extends RequestInit {
  token?: string
  data?: object

}

export async function http(endpoint: string, { data, token, headers, ...customConfig }: Config = {}) {
  const config = {
    method: 'GET',
    headers: {
      'Authorization': token ? `Bearer ${token}` : '',
      'Content-Type': data ? 'application/json' : '',
    },
    ...customConfig,
  }

  if (config.method.toUpperCase() === 'GET')
    endpoint += `${qs.stringify(data)}`
  else
    config.body = JSON.stringify(data || {})

  // axios 和 fetch 的表现不一样，axios 可以直接在返回状态不为 2xx 的时候抛出异常
  return window.fetch(`${apiUrl}/${endpoint}`, config)
    .then(async (response) => {
      if (response.status === 401) {
        await auth.logout()
        window.location.reload()
        return Promise.reject(new Error('请重新登录'))
      }
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const data = await response.json()
      if (response.ok)
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return data

      else
        return Promise.reject(data)
    })
}

export function useHttp() {
  const { user } = useAuth()
  return (...[endpoint, config]: Parameters<typeof http>) => http(endpoint, { ...config, token: user?.token })
}
