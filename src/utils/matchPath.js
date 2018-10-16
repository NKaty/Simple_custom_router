export default (pathname, { path, exact = false }) => {
  if (!path)
    return {
      isExact: true,
      path: null,
      url: pathname
    }

  const match = new RegExp(`^${path}`).exec(pathname)

  if (!match) return null

  const url = match[0]
  const isExact = pathname === url

  if (exact && !isExact) return null

  return { isExact, path, url }
}
