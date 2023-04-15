export async function fetchTopStories () {
  const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json')

  if (!response.ok) {
    throw new Error('Error loading top stories!')
  }

  return response.json()
}

export async function fetchStory (id) {
  const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)

  if (!response.ok) {
    throw new Error('Error loading a story!')
  }

  return response.json()
}
