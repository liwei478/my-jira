import type { FC, ReactNode } from 'react'
import { memo } from 'react'
import { Table } from 'antd'
import type { IProjectInfo, IUser } from './type'

interface IProps {
  users: IUser[]
  list: IProjectInfo[]
  children?: ReactNode
}
const List: FC<IProps> = (props) => {
  const { users, list } = props
  return <Table className='w-screen' pagination={false} columns={[{
    title: '名称',
    dataIndex: 'name',
    sorter: (a, b) => a.name.localeCompare(b.name),
  }, {
    title: '负责人',
    render(value, project) {
      return <span>
          {users.find(user => user.id === project.personId)?.name || '未知'}
        </span>
    },
  }]} dataSource={list} />
}

export default memo(List)
