import React from 'react'
import styled from '@emotion/styled'
import Story from './Story'
import PageLoader from './PageLoader'
import useTopStoryIds from './Hooks/useTopStoryIds'

function StoryListing () {
  const { topStoryIds, getNextPage } = useTopStoryIds()

  return (
    <div>
      <h1>{`[${topStoryIds.length}/500] Hacker News Top Stories`}</h1>
      <StoryList>
        {topStoryIds.map((storyId, index) => (
          <Story key={storyId} id={storyId} index={index % 20} />
        ))}
      </StoryList>
      <PageLoader onLoad={getNextPage} />
    </div>
  )
}

const StoryList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`

export default StoryListing
