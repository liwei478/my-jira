import { memo, useEffect, useState } from 'react'
import type { User } from './type'

export const SearchPanel = memo(() => {
  const [param, setParam] = useState({
    name: '',
    personId: '',
  })
  const [users, setUsers] = useState<User[]>([])
  const [list, setList] = useState([])

  useEffect(() => {
    fetch('').then((response: Response) => {
      if (response.ok)
        // setList(await response.json())
        setList([])
    }).catch(() => {})
  }, [param])

  return <form>
    <div>
      <input type="text" value={param.name} onChange={evt => setParam({
        ...param,
        name: evt.target.value,
      })} />
      <select value={param.personId} onChange={evt => setParam({
        ...param,
        personId: evt.target.value,
      })}>
        <option value={''}>负责人</option>
      {
        users.map(user => <option value={user.personId}>{user.name}</option>)
      }
      </select>
    </div>
  </form>
})
