import React from 'react'
import styled from '@emotion/styled'
import Story from './Story'
import PageLoader from './PageLoader'
import useTopStoryIds from './Hooks/useTopStoryIds'
import { TOP_STORIES_PAGE_SIZE } from './constants'

function StoryListing () {
  const { topStoryIds, getNextPage } = useTopStoryIds(TOP_STORIES_PAGE_SIZE)

  return (
    <StoryListingContainer>
      <Header>
        <h1>{`Hacker News Top Stories • [${topStoryIds.length}/500]`}</h1>
      </Header>
      <StoryList>
        {topStoryIds.map((storyId, index) => (
          <Story key={storyId} id={storyId} index={index} />
        ))}
      </StoryList>
      <PageLoader onLoad={getNextPage} />
    </StoryListingContainer>
  )
}

const HEADER_HEIGHT = '100px'

const StoryListingContainer = styled.div`
  margin: 0 1rem 4rem 1rem;
`

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  left: 0;
  right: 0;
  height: ${HEADER_HEIGHT};
  margin: 0;
  border-bottom: 1px solid black;
  background-color: white;

  h1 {
    max-width: calc(1024px - 2rem);
    margin: 0;
    padding: 0 1rem;
  }
`

const StoryList = styled.ul`
  margin: 0;
  padding: ${HEADER_HEIGHT} 0 0 0;
  list-style: none;
`

export default StoryListing
