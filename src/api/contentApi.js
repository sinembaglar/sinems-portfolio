import client from './client'

// Sends the local data to reqres. reqres sends the same data back and adds an id and createdAt.
export async function postContent(content) {
  const response = await client.post('/workintech', content)
  const { id: _id, createdAt: _createdAt, ...data } = response.data
  return data
}
