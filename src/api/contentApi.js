import client from './client'

// Sends the local site content to reqres and returns what the server sends back.
// reqres echoes the body and adds `id` and `createdAt`, which the UI does not need.
export async function postContent(content) {
  const response = await client.post('/workintech', content)
  const { id: _id, createdAt: _createdAt, ...echoed } = response.data
  return echoed
}
