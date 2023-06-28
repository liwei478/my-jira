'use client'

import App from '../index'
import { AppProviders } from '@/context'

export default function Home() {
  return (
    // flex min-h-screen flex-col items-center justify-center
    <main className="">
      <AppProviders>
        <App />
      </AppProviders>
    </main>
  )
}
