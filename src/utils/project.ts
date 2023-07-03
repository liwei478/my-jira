import { useEffect } from 'react'
import type { IProjectInfo } from '../screens/ProjectList/type'
import { useHttp } from '@/http'
import { cleanObject } from '@/utils'
import { useAsync } from '@/utils/use-async'

export function useProjects(param?: Partial<IProjectInfo>) {
  const client = useHttp()
  const { run, ...result } = useAsync<{ projects: IProjectInfo[] }>()

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises, @typescript-eslint/no-unsafe-argument
    run(client('/api/projects', { data: cleanObject(param || {}) }))
  }, [param])

  return result
}
