import type { ReactNode } from 'react'
import React, { useState } from 'react'
import * as auth from '../auth-provider'
import type { ILoginParam, IUserVedio } from '@/screens/ProjectList/type'

const AuthContext = React.createContext<{
  user: IUserVedio | null
  login: (form: ILoginParam) => Promise<void>
  register: (form: ILoginParam) => Promise<void>
  logout: () => Promise<void>
} | undefined>(undefined)
AuthContext.displayName = 'AuthContext'

// point free
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<IUserVedio | null>(null)

  const login = (form: ILoginParam) => auth.loginOrRegister(form, 'login').then(setUser)
  const register = (form: ILoginParam) => auth.loginOrRegister(form, 'register')
    .then(setUser)
  const logout = () => auth.logout().then(() => setUser(null))

  return <AuthContext.Provider children={children} value={{ user, login, register, logout }} />
}

export function useAuth() {
  const context = React.useContext(AuthContext)
  if (!context)
    throw new Error('useAuth 必须在 AuthProvider 中使用')
  return context
}
