import { memo, useEffect, useState } from 'react'
import * as qs from 'qs'
import getConfig from '../../../next.config'
import SearchPanel from './searchPanel'
import List from './list'

import type { IProjectInfo, IPublicRuntimeConfig, IUser } from './type'
import { cleanObject, useDebounce, useMount } from '@/utils'

const { publicRuntimeConfig } = getConfig
const apiUrl = (publicRuntimeConfig as IPublicRuntimeConfig).env === 'development' ? 'http://localhost:3001' : 'http://online.com'
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
