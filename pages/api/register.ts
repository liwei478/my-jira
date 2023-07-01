import type { NextApiRequest, NextApiResponse } from 'next'
import type { ILoginParam } from '@/screens/ProjectList/type'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { username, password } = (req.body as ILoginParam)
    res.status(200).json({
      user: {
        id: Number(Math.random().toFixed(5)) * 100000,
        name: username,
        token: password,
      },
    })
  }
}
