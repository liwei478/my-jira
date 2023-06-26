import { Button, Form, Input } from 'antd'
import { memo } from 'react'
import { useAuth } from '@/context/auth-context'
import type { ILoginParam } from '@/screens/ProjectList/type'

export const LoginScreen = memo(() => {
  const { login/* , user */ } = useAuth()
  const onLoginFinish = (values: ILoginParam) => {
    login(values).then(() => {}).catch(() => {})
  }
  const onLoginFinishFailed = (errorInfo: any) => {
    console.log('Failed: ', errorInfo)
  }

  return <div suppressHydrationWarning={true}>
    {/* {
      user
        ? <div>
            登录成功，用户名: {user?.token}
      </div>
        : null
    } */}
    <div className='text-xl' style={{ fontSize: '2rem', marginBottom: '2rem', fontWeight: '700' }}>请登录</div>
    <Form name='basic' wrapperCol={{ span: 24 }} autoComplete='off' onFinish={onLoginFinish} onFinishFailed={onLoginFinishFailed}>

      <Form.Item name="username" rules={[{ required: true, message: '请输入用户名' }]}>
        <Input placeholder='用户名' />
      </Form.Item>

      <Form.Item name="password" rules={[{ required: true, message: '请输入密码' }]}>
        <Input.Password placeholder='密码' />
      </Form.Item>

      <Form.Item wrapperCol={{ span: 24 }}>
        <Button className='w-full' type='primary' htmlType='submit'>登录</Button>
      </Form.Item>

    </Form>
  </div>
})
