import { useState } from 'react'
import { Button } from 'antd'
import { RegisterScreen } from './register'
import { LoginScreen } from './login'

export function UnauthenticatedApp() {
  const [isRegister, setIsRegister] = useState(false)
  return <div>
    {
      isRegister ? <RegisterScreen /> : <LoginScreen />
    }
    <Button type="primary" onClick={() => setIsRegister(
      !isRegister,
    )}>切换到{isRegister ? '登录' : '注册'}页面</Button>
  </div>
}
