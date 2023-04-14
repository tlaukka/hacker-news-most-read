import styled from '@emotion/styled'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <AppContainer>
      <h1>Hacker News Most Read</h1>
      <Outlet />
    </AppContainer>
  )
}

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
`

export default App
