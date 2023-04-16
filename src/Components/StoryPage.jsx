import { useParams } from 'react-router-dom'
import styled from '@emotion/styled'
import useStory from '../Hooks/useStory'
import animations from '../animations'
import React from 'react'
import useDelay from '../Hooks/useDelay'
import { getTimeString } from '../utils'
import Comment from './Comment'

function StoryPage () {
  const { storyId } = useParams()

  const story = useStory(storyId)
  const ready = useDelay(0)

  return (
    <StoryPageContainer ready={ready}>
      {!story ? (
        <>
          <Header>{'Loading...'}</Header>
          <By>{'-'}</By>
        </>
      ) : (
        <>
          <Header>{story.title}</Header>
          <By>{`By: ${story.by} • ${getTimeString(story.time)}`}</By>
          <Url href={story.url}>{`${story.url}`}</Url>
          <h2>{`Comments [${story.kids.length}]`}</h2>
          <CommentList>
            {story.kids.map((commentId) => (
              <Comment key={commentId} id={commentId} />
            ))}
          </CommentList>
        </>
      )}
    </StoryPageContainer>
  )
}

const StoryPageContainer = styled.div`
  padding: 1rem;
  ${animations.enter}
`

const Header = styled.h1`
  margin: 0 0 0.5rem 0;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #65737E;
`

const By = styled.h3`
  font-weight: 500;
  letter-spacing: 0.8px;
  margin: 0 0 2rem 0;
  color: #65737E;
`

const Url = styled.a`
  display: block;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  text-decoration: none;
  margin-bottom: 3rem;
  padding: 1rem;
  border-radius: 3px;
  color: #9DBE8C;
  background-color: #3b4150;

  :hover {
    color: #B9D1AD;
  }
`

const CommentList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  ${animations.fadeIn}
`

export default StoryPage
