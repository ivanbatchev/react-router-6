import { useEffect, useState } from "react"

export const useVans = () => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchVansData = async () => {
      try {
        setLoading(true)
        const response = await fetch('/api/vans')
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