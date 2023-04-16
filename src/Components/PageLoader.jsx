import React from 'react'
import styled from '@emotion/styled'
import { useInView } from 'react-intersection-observer'

function PageLoader ({ onLoad }) {
  const { ref, inView } = useInView()

  React.useEffect(
    () => {
      if (inView) {
        onLoad()
      }
    },
    [inView, onLoad]
  )

  return (
    <PageLoaderContainer ref={ref} />
  )
}

const PageLoaderContainer = styled.div`
  height: 32px;
`

export default PageLoader
