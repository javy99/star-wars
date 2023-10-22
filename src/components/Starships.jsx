import { Link } from 'react-router-dom'
import { useStarships, useCardClick } from '../hooks/'
import MovieCard from './MovieCard'
import MainPageLayout from './MainPageLayout'

const Starships = () => {
  const { data, error } = useStarships()
  const { handleCardClick } = useCardClick()

  return (
    <MainPageLayout
      title="Starships"
      data={data}
      error={error}
      renderCard={(starship) => (
        <Link to={`/starships/${starship.id}`} key={starship.id} onClick={() => handleCardClick(starship)}>
          <MovieCard
            key={starship.id}
            imageUrl={starship.src}
            title={starship.name}
            details={[
              { heading: 'Model', info: starship.model },
              { heading: 'Manufacturer', info: starship.manufacturer },
              { heading: 'Cost in credits', info: starship.cost_in_credits },
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

export default Starships
