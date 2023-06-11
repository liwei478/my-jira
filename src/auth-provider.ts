// 在真实的环境中，如果使用 firebase 这种第三方 auth 服务的话，本文件不需要开发者开发

import { apiUrl } from './api/config'
import type { ILoginParam, IUserResponse } from './screens/ProjectList/type'

const localStorageKey = '__auth_provider_token__'

export const getToken = () => window.localStorage.getItem(localStorageKey)

export function handleUserResponse({ user }: IUserResponse) {
  window.localStorage.setItem(localStorageKey, JSON.stringify(user.token || ''))
  return user
}

export function loginOrRegister(data: ILoginParam, type: string) {
  if (!apiUrl)
    return
  fetch(`${apiUrl}/${type}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(async (response: Response) => {
    if (response.ok)
      return handleUserResponse(await response.json() as IUserResponse)
  }).catch((err) => {
    console.log('error: ', err)
  })
}

export function logout() {
  window.localStorage.removeItem(localStorageKey)
}
