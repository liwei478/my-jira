export interface IUser extends IObjectInfo {
  name: string
  id: number | string

}

export interface IUserVedio {
  id: string | number
  name: string
  email: string
  title: string
  organization: string
  token: string
}

export interface IProjectInfo {
  id: number | string
  name: string
  personId: number
  organization: string
  pin?: boolean
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
export interface IRegisterParam {
  username: string
  password: string
  cPassword: string
}

export interface IUserResponse {
  user: IUserVedio
}
