import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // const { username, password } = (req.body as ILoginParam)
    // if (username !== '' && password !== '') {
    if ((req.query as { token: string }).token) {
      res.status(200).json({
        user: {
          // name: username,
          // password,
          username: 'fog',
          password: '123456',
          token: '123',
        },
      })
    }
    else {
      res.status(401).json({ message: '用户未授权' })
    }
    // }
  }
}
