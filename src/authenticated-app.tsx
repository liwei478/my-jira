import { Button } from 'antd'
import { useAuth } from './context/auth-context'
import { ProjectListScreen } from './screens/ProjectList'

export function AuthenticatedApp() {
  const { logout } = useAuth()
  const customLogout = () => {
    logout().then(() => { }).catch(() => { })
  }
  return <div className='grid grid-rows-[6rem_1fr_6rem] h-screen'>
    <div className='flex flex-row items-center justify-between'>
      <div className='flex items-center'>
        <h3>Logo</h3>
        <h3>项目</h3>
        <h3>用户</h3>
      </div>
      <div >
        <Button onClick={customLogout}>登出</Button>
      </div>
    </div>
    <div>
      <ProjectListScreen />
    </div>
  </div>
}
