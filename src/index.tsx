import { memo } from 'react'
import 'normalize.css'
import { Typography } from 'antd'
import { useAuth } from './context/auth-context'
import { AuthenticatedApp } from './authenticated-app'
import { UnauthenticatedApp } from './unauthenticated-app'
import type { CustomError } from './components/error-boundary'
import { ErrorBoundary } from './components/error-boundary'

function App() {
  const { user } = useAuth()
  return <>
    <ErrorBoundary fallbackReander={({ error }: CustomError) =>
      <div className='h-screen flex justify-center items-center'>
        <Typography.Text type='danger'>{error?.message}</Typography.Text>
      </div>
    }>
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </ErrorBoundary >

  </>
}

export default memo(App)
