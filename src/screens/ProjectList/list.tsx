import type { FC, ReactNode } from 'react'
import { memo } from 'react'
import type { IProjectInfo, IUser } from './type'

interface IProps {
  users: IUser[]
  list: IProjectInfo[]
  children?: ReactNode
}
const List: FC<IProps> = (props) => {
  const { users, list } = props
  return <div>
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {
          list.map(project => <tr key={project.id}>
            <td>{project.name}</td>
            <td>{users.find(user => user.id === project.personId)?.name || '未知'}</td>
          </tr>)
        }
      </tbody>
    </table>
  </div>
}

export default memo(List)
