import { useNavigate, useParams } from 'react-router-dom'
import styled from '@emotion/styled'
import useStory from './Hooks/useStory'
import { useQueries } from '@tanstack/react-query'
import { fetchItem } from './queries'
import { enter } from './animations'
import React from 'react'
import useDelay from './Hooks/useDelay'

function useComments ({ kids: ids = [] } = {}) {
  const queries = ids.map((id) => {
    return {
      queryKey: ['item', id],
      queryFn: () => fetchItem(id)
    }
  })

  const results = useQueries({ queries })

  return results
}

function StoryPage () {
  const { storyId } = useParams()
  const navigate = useNavigate()

  const story = useStory(storyId)
  const ready = useDelay(0)
  // const comments = useComments(story)

  function getTimeString (time) {
    const options = {
      timeZone: 'UTC',
      dateStyle: 'long',
      timeStyle: 'short'
    }

    return new Date(time * 1000).toLocaleString('en-UK', options)
  }

  // function renderComments () {
  //   return (
  //     <ul>
  //       {comments.map(({ data: comment }) => {
  //         if (!comment) {
  //           return null
  //         }

  //         return (
  //           <li key={comment.id} dangerouslySetInnerHTML={{ __html: comment.text }} />
  //         )
  //       })}
  //     </ul>
  //   )
  // }

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
          <GoBack onClick={() => navigate(-1)}>&lsaquo;{' Go back'}</GoBack>
          {/* {renderComments()} */}
        </>
      )}
    </StoryPageContainer>
  )
}

const StoryPageContainer = styled.div`
  padding: 2rem;

  ${enter}
`

const Header = styled.h1`
  margin: 0 0 0.5rem 0;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #000000;
`

const By = styled.h3`
  font-weight: 500;
  letter-spacing: 0.8px;
  margin: 0 0 2rem 0;
  color: #6f6f6f;
`

const Url = styled.a`
  display: block;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  text-decoration: none;
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 3px;
  border: 1px solid #d3d3d3;
  color: black;

  :hover {
    color: #4a4a4a;
  }
`

const GoBack = styled.button`
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  margin-top: 2rem;
  padding: 0;
  border-radius: none;
  border: none;
  border-bottom: 2px solid black;
  background: none;

  :hover {
    color: #4a4a4a;
  }
`

export default StoryPage
