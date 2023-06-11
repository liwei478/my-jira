import { Button, Form, Input } from 'antd'
import { memo } from 'react'
import { useAuth } from '@/context/auth-context'
import type { ILoginParam } from '@/screens/ProjectList/type'

export const LoginScreen = memo(() => {
  const { login, user } = useAuth()
  const onLoginFinish = (values: ILoginParam) => {
    login(values).then(() => {}).catch(() => {})
  }
  const onLoginFinishFailed = (errorInfo: any) => {
    console.log('Failed: ', errorInfo)
  }

  return <div suppressHydrationWarning={true}>
    {
      user
        ? <div>
            登录成功，用户名: {user?.token}
      </div>
        : null
    }
    <Form name='basic' labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} autoComplete='off' onFinish={onLoginFinish} onFinishFailed={onLoginFinishFailed}>

      <Form.Item label="用户名" name="username" rules={[{ required: true, message: '请输入用户名' }]}>
        <Input />
      </Form.Item>

      <Form.Item label="密码" name="password" rules={[{ required: true, message: '请输入密码' }]}>
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type='primary' htmlType='submit'>登录</Button>
      </Form.Item>

    </Form>
  </div>
})
