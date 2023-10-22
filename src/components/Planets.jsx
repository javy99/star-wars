import { Link } from 'react-router-dom'
import { usePlanets, useCardClick } from '../hooks/'
import MovieCard from './MovieCard'
import MainPageLayout from './MainPageLayout'

const Planets = () => {
  const { data, error } = usePlanets()
  const { handleCardClick } = useCardClick()

  return (
    <MainPageLayout
      title="Planets"
      data={data}
      error={error}
      renderCard={(planet) => (
        <Link to={`/planets/${planet.id}`} key={planet.id} onClick={() => handleCardClick(planet)}>
          <MovieCard
            key={planet.id}
            imageUrl={planet.src}
            title={planet.name}
            details={[
              { heading: 'Climate', info: planet.climate },
              { heading: 'Terrain', info: planet.terrain },
              { heading: 'Population', info: planet.population },
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

export default Planets
