export interface IUser extends IObjectInfo {
  name: string
  id: number | string
}

export interface IProjectInfo {
  id: number
  name: string
  personId: number
  organization: string
  created: number
}

export interface IPublicRuntimeConfig {
  env: string
}

export type IBasicType = number | string | null | undefined | Object

export interface IObjectInfo {
  [key: string]: IBasicType
}

export type IDebounceParam = IUser

export interface ILoginParam {
  username: string
  password: string
}
