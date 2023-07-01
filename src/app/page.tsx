'use client'

import React from 'react'
import App from '../index'
import { AppProviders } from '@/context'

export default function Home() {
  return (
    <main>
      <AppProviders>
        <App />
      </AppProviders>
    </main>
  )
}
