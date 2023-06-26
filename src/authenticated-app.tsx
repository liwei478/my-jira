import { Button } from 'antd'
import { useAuth } from './context/auth-context'
import { ProjectListScreen } from './screens/ProjectList'

export function AuthenticatedApp() {
  const { logout } = useAuth()
  const customLogout = () => {
    logout().then(() => {}).catch(() => {})
  }
  return <div className='flex flex-col justify-center items-center'>
    <Button className='w-1/4 ' onClick={customLogout}>登出</Button>
    <ProjectListScreen />
  </div>
}
