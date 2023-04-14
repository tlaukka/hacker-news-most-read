import styled from '@emotion/styled'
import { Outlet } from 'react-router-dom'
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'

const queryClient = new QueryClient()

async function getTopStories () {
  const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json')

  if (!response.ok) {
    throw new Error('Error loading top stories!')
  }

  return response.json()
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Root />
    </QueryClientProvider>
  )
}

function Root () {
  const { data } = useQuery({ queryKey: ['topstories'], queryFn: getTopStories })
  console.log(data)

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
