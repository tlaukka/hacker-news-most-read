import { useQuery } from '@tanstack/react-query'
import { fetchItem } from '../queries'

function useStory (id) {
  const { data: story } = useQuery({
    queryKey: ['story', id],
    queryFn: () => fetchItem(id),
    enabled: !!id
  })

  return story
}

export default useStory
