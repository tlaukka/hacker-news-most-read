import { useQueries } from "@tanstack/react-query"
import { fetchItem } from "../queries"

function useComments (story) {
  const ids = story?.kids ?? []

  const queries = ids.map((id) => {
    return {
      queryKey: ['item', id],
      queryFn: () => fetchItem(id)
    }
  })

  const results = useQueries({ queries })
  return results
}

export default useComments
