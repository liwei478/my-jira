import { useState } from 'react'
import { Button, Card, Divider } from 'antd'
import { RegisterScreen } from './register'
import { LoginScreen } from './login'

export function UnauthenticatedApp() {
  const [isRegister, setIsRegister] = useState(false)
  return <div className='flex flex-col items-center min-h-screen'>
    <header className="w-full bg-[url('../assets/logo.svg')] bg-no-repeat bg-center pt-[5rem] pb-[5rem] bg-[length:8rem]" ></header>
    <div className='absolute w-full h-full bg-no-repeat bg-fixed bg-home-size bg-home-position bg-[url("../assets/left.svg"),_url("../assets/right.svg")]' ></div>
    <Card className='text-center' style={{ width: '40rem', minHeight: '56rem', padding: '3.2rem 4rem', boxSizing: 'border-box', borderRadius: '0.3rem', boxShadow: 'rgba(0, 0, 0, 0.1) 0 0 10px' }} >
      {
        isRegister ? <RegisterScreen /> : <LoginScreen />
      }
      <Divider />
      <Button type='link' className='inline-block mt-5' onClick={() => setIsRegister(
        !isRegister,
      )}>{isRegister ? '已有账号？请直接登录' : '没有账号？注册新账号'}
      </Button>
    </Card>
  </div>
}
