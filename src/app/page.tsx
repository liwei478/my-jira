'use client'

import React from 'react'
import { RouterProvider } from 'react-router'
import App from '../index'
import { AppProviders } from '@/context'
import { router } from '@/router'

export default function Home() {
  return (
    <main>
      <AppProviders>
        <App />
        <RouterProvider router={router} />
      </AppProviders>
    </main>
  )
}
