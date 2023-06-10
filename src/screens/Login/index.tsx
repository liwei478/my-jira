import { Button, Form, Input } from 'antd'
import { memo } from 'react'
import type { ILoginParam } from '../ProjectList/type'
import { apiUrl } from '@/api/config'

export const LoginScreen = memo(() => {
  const login = (param: ILoginParam) => {
    if (!apiUrl)
      return
    fetch(`${apiUrl}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(param),
    }).then((response: Response) => {
      if (response.ok) {
        // the result is ok
      }
    }).catch((err) => {
      console.log('error: ', err)
    })
  }
  const onLoginFinish = (values: ILoginParam) => {
    login(values)
  }
  const onLoginFinishFailed = (errorInfo: any) => {
    console.log('Failed: ', errorInfo)
  }

  return <div suppressHydrationWarning={true}>
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
