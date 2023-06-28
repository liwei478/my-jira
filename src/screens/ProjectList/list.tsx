import type { FC, ReactNode } from 'react'
import dayjs from 'dayjs'
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
  return <Table className='' pagination={false} columns={[
    {
      title: '名称',
      dataIndex: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: '部门',
      dataIndex: 'organization',
    },
    {
      title: '负责人',
      render(value, project) {
        return <span>
          {users.find(user => user.id === project.personId)?.name || '未知'}
        </span>
      },
    },
    {
      title: '创建时间',
      render(value, project) {
        return <span>
          {project.created ? dayjs(project.created).format('YYYY-MM-DD') : '无'}
        </span>
      },
    },
  ]} dataSource={list} rowKey={'id'} />
}

export default memo(List)
