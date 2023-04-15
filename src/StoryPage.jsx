import { useNavigate, useParams } from 'react-router-dom'

function StoryPage () {
  const { storyId } = useParams()
  const navigate = useNavigate()

  return (
    <div>
      <h3>Story</h3>
      <button onClick={() => navigate(-1)}>{'< Go back'}</button>
      <p>
        {storyId}
      </p>
    </div>
  )
}

export default StoryPage
