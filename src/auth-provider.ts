// 在真实的环境中，如果使用 firebase 这种第三方 auth 服务的话，本文件不需要开发者开发

import type { ILoginParam, IUserResponse } from './screens/ProjectList/type'

const localStorageKey = '__auth_provider_token__'

export const getToken = () => window.localStorage.getItem(localStorageKey)

export function handleUserResponse({ user }: IUserResponse) {
  window.localStorage.setItem(localStorageKey, JSON.stringify(user.token || ''))
  return user
}

export async function loginOrRegister(data: ILoginParam, type: string) {
  const res = await fetch(`/api/${type}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  if (res.ok)
    return handleUserResponse(await res.json() as IUserResponse)
  else
    return Promise.reject(data)
}

// eslint-disable-next-line @typescript-eslint/require-await
export async function logout() {
  window.localStorage.removeItem(localStorageKey)
}
