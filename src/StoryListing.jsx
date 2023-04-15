import React from 'react'
import styled from '@emotion/styled'
import Story from './Story'
import PageLoader from './PageLoader'
import useTopStoryIds from './Hooks/useTopStoryIds'

function StoryListing () {
  const { topStoryIds, getNextPage } = useTopStoryIds()

  return (
    <>
      <HeaderContainer>
        <h1>{`[${topStoryIds.length}/500] - Hacker News Top Stories`}</h1>
      </HeaderContainer>
      <StoryList>
        {topStoryIds.map((storyId, index) => (
          <Story key={storyId} id={storyId} index={index % 20} />
        ))}
      </StoryList>
      <PageLoader onLoad={getNextPage} />
    </>
  )
}

const HEADER_HEIGHT = '100px'

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  left: 0;
  right: 0;
  height: ${HEADER_HEIGHT};
  margin: 0;
  background-color: #faefaf;

  h1 {
    max-width: calc(1024px - 2em);
    margin: 0;
    padding: 0 1em;
  }
`

const StoryList = styled.ul`
  margin: 0;
  padding: ${HEADER_HEIGHT} 0 0 0;
  list-style: none;
`

export default StoryListing
