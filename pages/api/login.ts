import type { NextApiRequest, NextApiResponse } from 'next'
import type { ILoginParam } from '@/screens/ProjectList/type'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { username, password } = (req.body as ILoginParam)
    if (username !== '' && password !== '') {
      res.status(200).json({
        user: {
          id: Number(Math.random().toFixed(6)) * 10000,
          name: username,
          token: '123',
        },
      })
    }
    else {
      res.status(400).json({ message: '用户名或密码错误' })
    }
  }
}
