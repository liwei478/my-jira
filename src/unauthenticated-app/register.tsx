import { Button, Form, Input } from 'antd'
import { memo } from 'react'
import { useAuth } from '@/context/auth-context'
import type { ILoginParam } from '@/screens/ProjectList/type'

export const RegisterScreen = memo(() => {
  const { register } = useAuth()
  const onLoginFinish = (values: ILoginParam) => {
    register(values).then(() => {}).catch(() => {})
  }
  const onLoginFinishFailed = (errorInfo: any) => {
    console.log('Failed: ', errorInfo)
  }

  return <div suppressHydrationWarning={true}>
    <Form name='basic' labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} autoComplete='off' onFinish={onLoginFinish} onFinishFailed={onLoginFinishFailed}>

      <Form.Item label="用户名" name="username" rules={[{ required: true, message: '请输入用户名' }]}>
        <Input placeholder='用户名' />
      </Form.Item>

      <Form.Item label="密码" name="password" rules={[{ required: true, message: '请输入密码' }]}>
        <Input.Password placeholder='密码' />
      </Form.Item>

      <Form.Item wrapperCol={{ span: 24 }}>
        <Button className='w-full' type='primary' htmlType='submit'>注册</Button>
      </Form.Item>

    </Form>
  </div>
})
