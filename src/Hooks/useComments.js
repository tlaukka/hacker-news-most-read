import { useQueries } from "@tanstack/react-query"
import { fetchItem } from "../queries"

function useComments ({ kids: ids = [] } = {}) {
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
