'use client'

import { LoginScreen } from '@/screens/Login'

// import { ProjectListScreen } from '@/screens/ProjectList'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <ProjectListScreen /> */}
      <LoginScreen />
    </main>
  )
}
