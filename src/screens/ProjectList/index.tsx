import { memo, useEffect, useState } from 'react'
import * as qs from 'qs'

import type { IProjectInfo, IUser } from './type'
import SearchPanel from './searchPanel'
import List from './list'
import { cleanObject, useDebounce, useMount } from '@/utils'
import { apiUrl } from '@/api/config'

export const ProjectListScreen = memo(() => {
  const [param, setParam] = useState<IUser>({
    name: '',
    id: '',
  })
  const debounceParam = useDebounce(param, 1000)
  const [users, setUsers] = useState<IUser[]>([])
  const [list, setList] = useState<IProjectInfo[]>([])

  useEffect(() => {
    if (!apiUrl)
      return
    fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debounceParam))}`).then(async (response: Response) => {
      if (response.ok) {
        const res = await response.json() as IProjectInfo[]
        setList(res)
      }
    }).catch(() => {})
  }, [debounceParam])

  useMount(() => {
    if (!apiUrl)
      return
    fetch(`${apiUrl}/users`).then(async (response: Response) => {
      if (response.ok) {
        const res = await response.json() as IUser[]
        setUsers(res)
      }
    }).catch(() => { })
  })

  return <div >
    <SearchPanel users={users} param={param} setParam={setParam} />
    <List users={users} list={list} />

  </div>
})
