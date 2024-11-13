export function handleFilterChange(key, value, setSearchParams) {
  setSearchParams((prevParams) => {
    if (value === null) {
      prevParams.delete(key)
    } else {
      prevParams.set(key, value)
    }
    return prevParams
  })
}
