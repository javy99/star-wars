import { Link } from 'react-router-dom'
import { useSpecies, useCardClick } from '../hooks/'
import MovieCard from './MovieCard'
import MainPageLayout from './MainPageLayout'

const Species = () => {
  const { data, error } = useSpecies()
  const { handleCardClick } = useCardClick()

  return (
    <MainPageLayout
      title="Species"
      data={data}
      error={error}
      renderCard={(specie) => (
        <Link to={`/species/${specie.id}`} key={specie.id} onClick={() => handleCardClick(specie)}>
          <MovieCard
            key={specie.id}
            imageUrl={specie.src}
            title={specie.name}
            details={[
              { heading: 'Classification', info: specie.classification },
              { heading: 'Designation', info: specie.designation },
            ]}
          />
        </Link>
      )}
      showMenu={false}
      showPagination={true}
      cardsPerPage={6}
    />
  )
}

export default Species
