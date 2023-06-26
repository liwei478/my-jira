'use client'

import App from '../index'
import { AuthProvider } from '@/context/auth-context'

export default function Home() {
  return (
    // flex min-h-screen flex-col items-center justify-center
    <main className="">
      <AuthProvider>
        <App />
      </AuthProvider>
    </main>
  )
}
