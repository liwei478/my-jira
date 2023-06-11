'use client'

import App from '../index'
import { AuthProvider } from '@/context/auth-context'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AuthProvider>
        <App />
      </AuthProvider>
    </main>
  )
}
