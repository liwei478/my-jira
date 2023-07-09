import React from 'react'

export interface CustomError { error: Error | null }
type FallbackRender = (props: CustomError) => React.ReactElement

// https://github.com/bvaughn/react-error-boundary
export class ErrorBoundary extends React.Component<React.PropsWithChildren<{ fallbackReander: FallbackRender }>, CustomError> {
  state = { error: null }

  // Update state so that hte next render will show the fallback UI.
  static getDerivedStateFromError(error: Error) {
    return { error }
  }

  render(): React.ReactNode {
    const { error } = this.state
    const { fallbackReander, children } = this.props
    if (error)
      return fallbackReander({ error })

    return children
  }
}
