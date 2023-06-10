import getConfig from '../../next.config'
import type { IPublicRuntimeConfig } from '@/screens/ProjectList/type'

const { publicRuntimeConfig } = getConfig
export const apiUrl = (publicRuntimeConfig as IPublicRuntimeConfig).env === 'development' ? 'http://localhost:3001' : 'http://online.com'
