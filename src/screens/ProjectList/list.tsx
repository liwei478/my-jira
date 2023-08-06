import type { FC, ReactNode } from 'react'
import dayjs from 'dayjs'
import { memo } from 'react'
import type { TableProps } from 'antd'
import { Table } from 'antd'
import type { IProjectInfo, IUser } from './type'

interface IProps extends TableProps<IProjectInfo> {
  users: IUser[]
  children?: ReactNode
}
const List: FC<IProps> = ({ users, ...props }) => {
  // const { users, list } = props
  return <Table className='' pagination={false} columns={[
    {
      title: '名称',
      // dataIndex: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
      render(value, project) {
        console.log(value, project)
        // return <Link to={String(project.id)}>{project.name}</Link>
        return <div>{project.name}</div>
      },
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
  ]} {...props} rowKey={'id'} />
}

export default memo(List)
