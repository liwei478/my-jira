import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const users = [
    {
      id: 1,
      name: '高修文',
    },
    {
      id: 2,
      name: '熊天成',
    },
    {
      id: 3,
      name: '郑华',
    },
    {
      id: 4,
      name: '王文静',
    },
  ]
  if (req.method === 'GET' && users.length) {
    res.status(200).json({
      users,
    })
  }
  else {
    res.status(500).json({ error: 'Failed to fetch user' })
  }
}
