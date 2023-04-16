export function getTimeString (time) {
  const options = {
    timeZone: 'UTC',
    dateStyle: 'long',
    timeStyle: 'short'
  }

  return new Date(time * 1000).toLocaleString('en-UK', options)
}
