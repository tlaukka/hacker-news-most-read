import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import useDelay from './Hooks/useDelay'
import useStory from './Hooks/useStory'
import { TOP_STORIES_PAGE_SIZE } from './constants'
import { enter } from './animations'

function Story ({ id, index }) {
  const story = useStory(id)
  const ready = useDelay((index % TOP_STORIES_PAGE_SIZE) * 60)

  return (
    <StoryItem ready={ready}>
      {!story ? (
        <>
          <Title>{'Loading...'}</Title>
          <By>{'-'}</By>
        </>
      ) : (
        <>
          <Title to={`story/${story.id}`}>
            <span>{`${index + 1}. `}</span>{`${story.title}`}
          </Title>
          <By>{`[${story.score}pt] • ${story.by}`}</By>
        </>
      )}
    </StoryItem>
  )
}

const StoryItem = styled.li`
  margin: 1rem 0;
  padding: 2rem;
  border-radius: 3px;
  border: 1px solid #d3d3d3;

  ${enter}
`

const Title = styled(Link)`
  display: block;
  font-size: 1.4rem;
  font-weight: 500;
  text-decoration: none;
  /* white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden; */
  margin: 0 0 0.4rem 0;
  color: #000000;
  /* transition: color 0.2s; */

  :hover {
    /* text-decoration: underline; */
    color: #a0a0a0;
  }

  span {
    color: #6f6f6f;
  }
`

const By = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.8px;
  margin: 0;
  color: #6f6f6f;
`

export default Story
