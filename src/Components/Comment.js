import styled from '@emotion/styled'
import { getTimeString } from '../utils'

function Comment ({ comment }) {
  if (!comment) {
    return null
  }

  return (
    <CommentContainer key={comment.id}>
      <h4>{`${comment.by} • ${getTimeString(comment.time)}`}</h4>
      <CommentText dangerouslySetInnerHTML={{ __html: comment.text }} />
    </CommentContainer>
  )
}

const CommentContainer = styled.li`
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

export default Comment
