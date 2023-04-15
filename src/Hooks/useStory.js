import { useQuery } from '@tanstack/react-query';
import { fetchStory } from '../queries';

function useStory (id) {
  const { data: story } = useQuery({
    queryKey: ['story', id],
    queryFn: () => fetchStory(id)
  })

  return story
}

export default useStory
