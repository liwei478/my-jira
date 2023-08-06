import type { MenuProps } from 'antd'
import { Button, Dropdown, Menu } from 'antd'

// import { Outlet } from 'react-router'
import { useAuth } from './context/auth-context'
import SoftwareLogo from './assets/software-logo.svg'
import { ProjectListScreen } from './screens/ProjectList'

export function AuthenticatedApp() {
  const { logout, user } = useAuth()
  const customLogout = () => {
    logout().then(() => { }).catch(() => { })
  }
  const logoutMenuItems: MenuProps['items'] = [{
    key: 'logout',
    label: <Button type='link' onClick={customLogout}>登出</Button>,
  }]
  const userInfoItems: MenuProps['items'] = [{
    key: '1',
    label: <Menu items={logoutMenuItems} />,
  }]
  return <div className='grid grid-rows-[6rem_1fr_6rem] h-screen'>
    <div className='flex flex-row items-center justify-between p-[3.2rem] shadow-[0_0_5px_rbga(0,0,0,0.1) z-[1]]'>
      <div className='flex items-center'>
        <h3 className='mr-[2rem]'>
          <SoftwareLogo width={'19rem'} color={'rbg(38, 132, 255)'} />
        </h3>
        <h3 className='mr-[2rem]'>项目</h3>
        <h3 className='mr-[2rem]'>用户</h3>
      </div>
      <div>
        <Dropdown menu={{ items: userInfoItems }}>
          <Button type='link' >
            Hi, {user?.name}
          </Button>
        </Dropdown>
      </div>
    </div >
    <div>
      <ProjectListScreen />
      {/* <Router>
        <Routes>
          <Route path={'/projects'} element={<ProjectListScreen />} />
          <Route path={'/projects/:projectId/*'} element={<ProjectScreen />} />
        </Routes>
      </Router> */}
      {/* <Outlet /> */}
      {/* <Link to={'/projects'} /> */}
    </div>
  </div >
}
