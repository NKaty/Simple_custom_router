export default async (endPoint) => {
  const response = await fetch(`${endPoint}`)
  if (!response.ok) throw Error(response.statusText)
  return await response.json()
}
