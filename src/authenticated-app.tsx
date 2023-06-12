import { Button } from 'antd'
import { useAuth } from './context/auth-context'
import { ProjectListScreen } from './screens/ProjectList'

export function AuthenticatedApp() {
  const { logout } = useAuth()
  const customLogout = () => {
    logout().then(() => {}).catch(() => {})
  }
  return <div>
    <Button onClick={customLogout}>登出</Button>
    <ProjectListScreen />
  </div>
}
