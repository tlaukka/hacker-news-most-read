import { useParams } from 'react-router-dom'
import styled from '@emotion/styled'
import useStory from '../Hooks/useStory'
import useComments from '../Hooks/useComments'
import animations from '../animations'
import React from 'react'
import useDelay from '../Hooks/useDelay'
import { getTimeString } from '../utils'

function StoryPage () {
  const { storyId } = useParams()

  const story = useStory(storyId)
  const comments = useComments(story)

  const ready = useDelay(0)

  function renderComments () {
    return (
      <>
        <h2>{`Comments [${comments.length}]`}</h2>
        <CommentList>
          {comments.map(({ data: comment }) => {
            if (!comment) {
              return null
            }

            return (
              <Comment key={comment.id}>
                <h4>{`${comment.by} • ${getTimeString(comment.time)}`}</h4>
                <CommentText dangerouslySetInnerHTML={{ __html: comment.text }} />
              </Comment>
            )
          })}
        </CommentList>
      </>
    )
  }

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
          {renderComments()}
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

const Comment = styled.li`
  margin: 1rem 0;
  padding: 1rem;
  border-radius: 3px;
  background-color: #3b4150;

  h4 {
    margin: 0 0 1rem 0;
    color: #65737E;
  }
`

const CommentText = styled.p`
  margin: 0;

  a {
    color: #9DBE8C;

    :hover {
      color: #B9D1AD;
    }
  }
`

export default StoryPage
