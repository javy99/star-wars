import { Link } from 'react-router-dom'
import { useVehicles, useCardClick } from '../hooks/'
import MovieCard from './MovieCard'
import MainPageLayout from './MainPageLayout'

const Vehicles = () => {
  const { data, error } = useVehicles()
  const { handleCardClick } = useCardClick()

  return (
    <MainPageLayout
      title="Vehicles"
      data={data}
      error={error}
      renderCard={(vehicle) => (
        <Link to={`/vehicles/${vehicle.id}`} key={vehicle.id} onClick={() => handleCardClick(vehicle)}>
          <MovieCard
            key={vehicle.id}
            imageUrl={vehicle.src}
            title={vehicle.name}
            details={[
              { heading: 'Type', info: vehicle.type },
              { heading: 'Manufacturer', info: vehicle.manufacturer },
              { heading: 'Passengers', info: vehicle.passengers },
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

export default Vehicles
