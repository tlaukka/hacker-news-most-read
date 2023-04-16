export async function fetchTopStories () {
  const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json')

  if (!response.ok) {
    throw new Error('Error fetching top stories!')
  }

  return response.json()
}

export async function fetchItem (id) {
  const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)

  if (!response.ok) {
    throw new Error(`Error fetching an item: ${id}!`)
  }

  return response.json()
}
