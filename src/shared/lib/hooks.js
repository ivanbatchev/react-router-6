import { useEffect, useState } from 'react'

export const useVans = (id = '', isHostRoute = false) => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchVansData = async () => {
      try {
        setLoading(true)
        // ==================================================================
        // if id exists than get details about van, on the contraty get all
        // ==================================================================
        const response = await fetch(
          `/api${isHostRoute ? '/host' : ''}/vans${id ? `/${id}` : ''}`
        )
        const data = await response.json()
        setData(data?.vans)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }
    fetchVansData()
  }, [id])

  return {
    loading,
    data: isHostRoute && id && data[0] ? data[0] : data,
    error
  }
}
