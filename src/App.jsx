import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import StoryListing from './StoryListing'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 30000
    },
  }
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <StoryListing />
    </QueryClientProvider>
  )
}

export default App
