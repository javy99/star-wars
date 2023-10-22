import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useFilms, useCardClick } from '../hooks'
import MovieCard from './MovieCard'
import MainPageLayout from './MainPageLayout'

const Episodes = () => {
  const { data, error } = useFilms()
  const [sortBy, setSortBy] = useState('Date')
  const [filteredData, setFilteredData] = useState([])
  const { handleCardClick } = useCardClick()

  useEffect(() => {
    if (!data) return

    const sortedData = [...data]
    if (sortBy === 'Date') {
      sortedData.sort((a, b) => a.release_date.localeCompare(b.release_date))
    } else if (sortBy === 'Name') {
      sortedData.sort((a, b) => a.name.localeCompare(b.name))
    } else if (sortBy === 'Episode') {
      sortedData.sort((a, b) => a.id - b.id)
    }

    setFilteredData(sortedData)
  }, [data, sortBy])

  const handleMenuItemClick = (value) => {
    setSortBy(value)
  }

  return (
    <MainPageLayout
      title="Episodes"
      data={filteredData}
      error={error}
      renderCard={(film) => (
        <Link to={`/episodes/${film.id}`} key={film.id} onClick={() => handleCardClick(film)}>
          <MovieCard
            key={film.id}
            imageUrl={film.src}
            title={'Star Wars: Episode ' + film.id + ' - ' + film.name}
            details={[
              { heading: 'Episode', info: 'Episode ' + film.id },
              { heading: 'Director', info: film.director },
              { heading: 'Producer', info: film.producer },
              { heading: 'Release Date', info: film.release_date },
            ]}
          />
        </Link>
      )}
      showMenu={true}
      sortBy={sortBy}
      handleMenuItemClick={handleMenuItemClick}
      showPagination={false}
    ></MainPageLayout>
  )
}

export default Episodes
