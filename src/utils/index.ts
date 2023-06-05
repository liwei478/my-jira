import type { EffectCallback } from 'react'
import { useEffect, useState } from 'react'

import type { IBasicType, IDebounceParam, IObjectInfo } from '@/screens/ProjectList/type'

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

export function useMount(cb: EffectCallback) {
  useEffect(cb, [])
}

export function useDebounce(value: IDebounceParam, delay: number) {
  const [debounceValue, setDebounceValue] = useState(value)
  useEffect(() => {
    const timeout = setTimeout(() => setDebounceValue(value), delay)
    return () => clearTimeout(timeout)
  }, [value, delay])

  return debounceValue
}
