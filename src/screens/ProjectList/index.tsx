import { memo, useState } from 'react'

import { Typography } from 'antd'
import { useProjects } from '../../utils/project'
import type { IUser } from './type'
import SearchPanel from './searchPanel'
import List from './list'

import { useDebounce, useDocumentTitle } from '@/utils'
import { useUsers } from '@/utils/users'

export const ProjectListScreen = memo(() => {
  const [param, setParam] = useState<IUser>({
    name: '',
    id: '',
  })
  const debounceParam = useDebounce(param, 1000)
  const { isLoading, error, data: list } = useProjects(debounceParam)
  const { data: user } = useUsers()
  useDocumentTitle('项目列表', false)

  return <div className='p-[3.2rem]'>
    <h1>项目列表</h1>
    <SearchPanel users={user?.users || []} param={param} setParam={setParam} />
    {error ? <Typography.Text type='danger'>{error.message}</Typography.Text> : null}
    <List users={user?.users || []} dataSource={list?.projects || []} loading={isLoading} />
  </div>
})
