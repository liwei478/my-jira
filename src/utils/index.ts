import type { IBasicType, IObjectInfo } from '@/screens/ProjectList/type'

export const isFalsy = (value: IBasicType) => value === 0 ? true : !value

// 在一个函数中，改变传入的对象本是是不好的
export function cleanObject(object: IObjectInfo) {
  const result = { ...object }
  Object.keys(result).forEach((key) => {
    const value = result[key]
    isFalsy(value) && delete result[key]
  })
  return result
}
