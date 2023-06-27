import { memo } from 'react'
import 'normalize.css'
import { useAuth } from './context/auth-context'
import { AuthenticatedApp } from './authenticated-app'
import { UnauthenticatedApp } from './unauthenticated-app'

function App() {
  const { user } = useAuth()

  return <>
    {
      user ? <AuthenticatedApp /> : <UnauthenticatedApp />
    }
  </>
}

export default memo(App)
