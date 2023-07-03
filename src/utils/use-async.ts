import { useState } from 'react'

interface State<D> {
  error: Error | null
  data: D | null
  customState: 'idle' | 'loading' | 'error' | 'success'
}

const defaultInitialState: State<null> = {
  customState: 'idle',
  data: null,
  error: null,
}

export function useAsync<D>(initialState?: State<D>) {
  const [state, setState] = useState<State<D>>({
    ...defaultInitialState,
    ...initialState,
  })

  const setData = (data: D) => setState({
    data,
    customState: 'success',
    error: null,
  })

  const setError = (error: Error) => setState({
    error,
    customState: 'error',
    data: null,
  })

  // run 用来触发异步请求
  const run = (promise: Promise<D>) => {
    if (!promise.then)
      throw new Error('请传入 Promise 类型数据')

    setState({ ...state, customState: 'loading' })
    return promise
      .then((data) => {
        setData(data)
        return data
      })
      .catch((error: Error) => {
        setError(error)
        return error
      })
  }

  return {
    isIdle: state.customState === 'idle',
    isLoading: state.customState === 'loading',
    isError: state.customState === 'error',
    isSuccess: state.customState === 'success',
    run,
    setData,
    setError,
    ...state,
  }
}
