import { useEffect, useState } from "react"

export const useVans = (id) => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchVansData = async () => {
      try {
        setLoading(true)
        // if id exists than get details about van, on the contraty get all
        const response = await fetch(`/api/vans${id ? `/${id}` : ''}`)
        const data = await response.json()
        setData(data?.vans)
        setLoading(false)
      } catch (error) {
        setLoading(false)
        setError(error)
      }
    }
    fetchVansData()
  }, [])

  return {
    loading,
    data,
    error
  }
} 