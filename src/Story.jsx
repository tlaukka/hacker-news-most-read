import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import {  useQuery } from '@tanstack/react-query'
import { fetchStory } from './queries'

function useDelay (delay) {
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

function Story ({ id, index }) {
  const { data: story } = useQuery({
    queryKey: ['story', id],
    queryFn: () => fetchStory(id)
  })

  const ready = useDelay(index * 60)

  return (
    <StoryItem ready={ready}>
      {!story ? (
        'Loading...'
      ) : (
        <Link to={`story/${story.id}`}>
          {story.id}
        </Link>
      )}
    </StoryItem>
  )
}

const StoryItem = styled.li`
  padding: 32px;
  border: 1px solid black;

  /* position: relative;
  left: ${({ opacity }) => (opacity === 1) ? '0px' : '64px'};
  transition: left 1s; */

  margin-left: ${({ ready }) => ready ? '0px' : '64px'};
  opacity: ${({ ready }) => ready ? 1 : 0};
  transition: margin-left 1s, opacity 2s;
`

export default Story
