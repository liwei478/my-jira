import { Button } from 'antd'
import { useAuth } from './context/auth-context'
import { ProjectListScreen } from './screens/ProjectList'

export function AuthenticatedApp() {
  const { logout } = useAuth()
  return <div>
    <Button onClick={() => logout}>登出</Button>
    <ProjectListScreen />
  </div>
}
