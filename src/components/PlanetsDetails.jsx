import DetailsPage from './DetailsPage'
import { usePlanets } from '../hooks'
import { useParams } from 'react-router-dom'

const PlanetsDetails = () => {
  const { id } = useParams()
  const { data, error } = usePlanets()

  if (error) {
    return <div>Error: {error.message}</div>
  }

  if (!data) {
    return <div>Loading...</div>
  }

  const selectedData = data.find((item) => item.id === Number(id))

  if (!selectedData) {
    return <div>Selected data not found</div>
  }

  const planetsInformation = [
    { label: 'Rotation period', value: selectedData.rotation_period },
    { label: 'Orbital period', value: selectedData.orbital_period },
    { label: 'Diameter', value: selectedData.diameter },
    { label: 'Climate', value: selectedData.climate },
    { label: 'Gravity', value: selectedData.gravity },
    { label: 'Terrain', value: selectedData.terrain },
    { label: 'Surface water', value: selectedData.surface_water },
    { label: 'Population', value: selectedData.population },
    { label: 'Residents', value: selectedData.residents.map((resident) => resident.name).join(', ') },
    { label: 'Films', value: selectedData.films.map((film) => film.name).join(', ') },
  ]

  return <DetailsPage title="Planets" backLink="/planets" data={data} information={planetsInformation} />
}

export default PlanetsDetails
