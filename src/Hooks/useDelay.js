import React from 'react'

function useDelay (delay = 0) {
  const [ready, setReady] = React.useState(false)

  React.useEffect(
    () => {
      const timeout = setTimeout(() => {
        setReady(true)
      }, delay)

      return () => {
        clearTimeout(timeout)
      }
    },
    [delay]
  )

  return ready
}

export default useDelay
