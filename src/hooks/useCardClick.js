import { useState } from 'react'

const useCardClick = () => {
  const [selectedItem, setSelectedItem] = useState(null)

  const handleCardClick = (item) => {
    setSelectedItem(item)
  }
  return { selectedItem, handleCardClick }
}

export default useCardClick
