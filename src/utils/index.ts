import type { EffectCallback } from 'react'
import { useEffect, useRef, useState } from 'react'

import type { IBasicType, IDebounceParam, IObjectInfo } from '@/screens/ProjectList/type'

export const isFalsy = (value: IBasicType) => value === 0 ? true : !value

export const isVoid = (value: unknown) => value === undefined || value === null || value === ''

// 在一个函数中，改变传入的对象本是是不好的
export function cleanObject(object: IObjectInfo) {
  const result = { ...object }
  Object.keys(result).forEach((key) => {
    const value = result[key]
    // isFalsy(value) && delete result[key]
    isVoid(value) && delete result[key]
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

export function useDocumentTitle(title: string, keepOnUnmount = true) {
  const oldTitle = useRef(document.title).current
  // 页面加载前：旧oldTitle
  // 页面加载后：新oldTitle
  useEffect(() => {
    document.title = title
  }, [title])
  useEffect(() => {
    return () => {
      !keepOnUnmount && (document.title = oldTitle)
    }
  }, [keepOnUnmount, oldTitle])
}
