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
  background-color: #3b4150;
  box-shadow: 3px 3px 6px 0 rgba(0, 0, 0, 0.2);

  ${enter}
`

const Title = styled(Link)`
  display: block;
  font-size: 1.4rem;
  font-weight: 500;
  text-decoration: none;
  margin: 0 0 0.4rem 0;
  color: #9DBE8C;

  :hover {
    color: #B9D1AD;
  }

  span {
    color: #c9cbd3;
  }
`

const By = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.8px;
  margin: 0;
`

export default Story
