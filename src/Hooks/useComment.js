import { useQuery } from "@tanstack/react-query"
import { fetchItem } from "../queries"

function useComment (id) {
  const { data: comment } = useQuery({
    queryKey: ['comment', id],
    queryFn: () => fetchItem(id),
    enabled: !!id
  })

  return comment
}

export default useComment
