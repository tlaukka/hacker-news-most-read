import { useNavigate, useParams } from 'react-router-dom'
import styled from '@emotion/styled'
import useStory from './Hooks/useStory'

function StoryPage () {
  const { storyId } = useParams()
  const navigate = useNavigate()

  const story = useStory()

  if (!story) {
    return (
      <StoryPageContainer>
        <Header>{'Loading...'}</Header>
      </StoryPageContainer>
    )
  }

  return (
    <StoryPageContainer>
      <Header>Story</Header>
      <button onClick={() => navigate(-1)}>{'< Go back'}</button>
      <p>
        {storyId}
      </p>
    </StoryPageContainer>
  )
}

const StoryPageContainer = styled.div`
  padding: 2em;
  border: 1px solid black;
`

const Header = styled.h1`

`

export default StoryPage
