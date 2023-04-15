import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Outlet } from 'react-router-dom'
import styled from '@emotion/styled'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 30000
    },
  }
})

function App () {
  return (
    <Layout>
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
    </Layout>
  )
}

const Layout = styled.div`
  position: relative;
  max-width: 1024px;
  margin: 0 auto;
  background-color: #bababa;
`

export default App
