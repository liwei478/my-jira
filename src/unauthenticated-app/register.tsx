import { Button, Form, Input } from 'antd'
import { memo } from 'react'
import { useAuth } from '@/context/auth-context'
import type { IRegisterParam } from '@/screens/ProjectList/type'
import { useAsync } from '@/utils/use-async'

export const RegisterScreen = memo(({ onError }: { onError: (error: Error) => void }) => {
  const { register } = useAuth()
  const { run, isLoading } = useAsync(undefined, { throwOnError: true })

  const onLoginFinish = ({ cPassword, ...values }: IRegisterParam) => {
    if (cPassword !== values.password) {
      onError(new Error('请确认两次输入的密码相同'))
      return
    }
    run(register(values)).then(() => { }).catch((e: Error) => onError(e))
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
      <Form.Item label="确认密码" name="cPassword" rules={[{ required: true, message: '请确认密码' }]}>
        <Input.Password placeholder='确认密码' />
      </Form.Item>

      <Form.Item wrapperCol={{ span: 24 }}>
        <Button loading={isLoading} className='w-full' type='primary' htmlType='submit'>注册</Button>
      </Form.Item>

    </Form>
  </div>
})
