import type { NextApiRequest, NextApiResponse } from 'next'
import type { IProjectInfo } from '@/screens/ProjectList/type'

const projects: IProjectInfo[] = [
  {
    id: 1,
    name: '骑手管理',
    personId: 1,
    organization: '外卖组',
    created: 1604989757139,
  },
  {
    id: 2,
    name: '团购 APP',
    personId: 2,
    organization: '团购组',
    created: 1604989757139,
  },
  {
    id: 3,
    name: '物料管理系统',
    personId: 2,
    organization: '物料组',
    created: 1546300800000,
  },
  {
    id: 4,
    name: '总部管理系统',
    personId: 3,
    organization: '总部',
    created: 1604980000011,
  },
  {
    id: 5,
    name: '送餐路线规划系统',
    personId: 4,
    organization: '外卖组',
    created: 1546900800000,
  },
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET' && projects.length) {
    const { id, name } = (req.query)
    const result: IProjectInfo[] = (id !== undefined && Number(id) !== 0)
      ? projects.filter(item => item.personId === Number(id))
      : name !== undefined
        ? projects.filter(item => item.name === name)
        : projects
    res.status(200).json({
      projects: result,
    })
  }
  else {
    res.status(500).json({ error: 'Failed to fetch projects' })
  }
}
