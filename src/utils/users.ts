/* eslint-disable @typescript-eslint/no-floating-promises */
import { useEffect } from 'react'
import { useAsync } from './use-async'
import { useHttp } from '@/http'
import type { IUser } from '@/screens/ProjectList/type'

export function useUsers(param?: Partial<IUser>) {
  const client = useHttp()
  const { run, ...result } = useAsync<{ users: IUser[] }>()

  // eslint-disable-next-line max-statements-per-line, @typescript-eslint/no-unsafe-argument
  useEffect(() => { run(client('/api/users')) }, [param])

  return result
}
