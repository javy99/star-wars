import { useState, useEffect } from 'react'
import db from '../../db.json'

const useData = (key) => {
  const [data, setData] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    try {
      const fetchedData = db[key]
      if (fetchedData) {
        setData(fetchedData)
      } else {
        setError('Data not found')
      }
    } catch (err) {
      setError(err.message)
    }
  }, [key])

  return { data, error }
}

export default useData
