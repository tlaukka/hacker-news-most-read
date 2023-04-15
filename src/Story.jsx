import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import useDelay from './Hooks/useDelay'
import useStory from './Hooks/useStory'
import { PAGE_SIZE } from './constants'

function Story ({ id, index }) {
  const story = useStory(id)
  const ready = useDelay((index % PAGE_SIZE) * 60)

  return (
    <StoryItem ready={ready}>
      {!story ? (
        'Loading...'
      ) : (
        <>
          <Title to={`story/${story.id}`}>{`${index + 1}. ${story.title}`}</Title>
          <By>{`[${story.score}pt] - By: ${story.by}`}</By>
        </>
      )}
    </StoryItem>
  )
}

const StoryItem = styled.li`
  padding: 2.6em 2em 2em 2em;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  border-bottom: 1px solid black;
  margin-left: ${({ ready }) => ready ? '0px' : '64px'};
  opacity: ${({ ready }) => ready ? 1 : 0};
  transition: margin-left 1s, opacity 2s;
`

const Title = styled(Link)`
  font-size: 1.4em;
  font-weight: 500;
  color: black;

  :hover {
    color: #4a4a4a;
  }
`

const By = styled.h3`
  font-weight: 500;
  letter-spacing: 0.04em;
  margin: 0.4em 0 0 0;
  color: #6f6f6f;
`

export default Story
