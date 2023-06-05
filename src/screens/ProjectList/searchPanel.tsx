import type { Dispatch, FC, ReactNode, SetStateAction } from 'react'
import { memo } from 'react'
import type { IUser } from './type'

interface IProps {
  param: IUser
  users: IUser[]
  setParam: Dispatch<SetStateAction<IUser>>
  children?: ReactNode
}
const SearchPanel: FC<IProps> = (props) => {
  const { users, param, setParam } = props

  return <form>
    <div>
      <input type="text" value={param.name} onChange={evt => setParam({
        ...param,
        name: evt.target.value,
      })} />
      <select value={param.id} onChange={evt => setParam({
        ...param,
        id: Number(evt.target.value),
      })}>
        <option value={''}>负责人</option>
      {
        users.map(user => <option key={user.id} value={user.id}>{user.name}</option>)
      }
      </select>
    </div>
  </form>
}

export default memo(SearchPanel)
