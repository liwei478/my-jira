import { memo, useEffect, useState } from 'react'

import type { IProjectInfo, IUser } from './type'
import SearchPanel from './searchPanel'
import List from './list'

import { cleanObject, useDebounce, useMount } from '@/utils'
import { useHttp } from '@/http'

export const ProjectListScreen = memo(() => {
  const [param, setParam] = useState<IUser>({
    name: '',
    id: '',
  })
  const debounceParam = useDebounce(param, 1000)
  const [users, setUsers] = useState<IUser[]>([])
  const [list, setList] = useState<IProjectInfo[]>([])
  const client = useHttp()

  useEffect(() => {
    client('/api/projects', { data: cleanObject(debounceParam) }).then((res: { projects: IProjectInfo[] }) => {
      setList(res.projects)
    }).catch(() => { })
  }, [debounceParam])

  useMount(() => {
    client('/api/users')
      .then((res: { users: IUser[] }) => {
        setUsers(res.users)
      }).catch(() => {})

      .catch(() => {})
  })

  return <div className='p-[3.2rem]'>
    <h1>项目列表</h1>
    <SearchPanel users={users} param={param} setParam={setParam} />
    <List users={users} list={list} />
  </div>
})
