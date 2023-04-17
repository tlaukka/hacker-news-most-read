import React from 'react'
import {  useQuery } from '@tanstack/react-query'
import { fetchTopStories } from '../queries'

function useTopStoryIds (pageSize = 20) {
  const [page, setPage] = React.useState(0)

  const { data: storyIds } = useQuery({
    queryKey: ['topstories'],
    queryFn: fetchTopStories,
    enabled: page > 0
  })

  const getNextPage = React.useCallback(
    () => {
      setPage((prevPage) => prevPage + 1)
    },
    []
  )
//-------
  const end = page * pageSize
  const topStoryIds = storyIds?.slice(0, end) ?? []

  return {
    page,
    topStoryIds,
    getNextPage
  }
}

export default useTopStoryIds
