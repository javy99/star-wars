import DetailsPage from './DetailsPage'
import { useStarships } from '../hooks'
import { useParams } from 'react-router-dom'

const StarshipsDetails = () => {
  const { id } = useParams()
  const { data, error } = useStarships()

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

  const starshipsInformation = [
    { label: 'Model', value: selectedData.model },
    { label: 'Manufacturer', value: selectedData.manufacturer },
    { label: 'Cost in credits', value: selectedData.cost_in_credits },
    { label: 'Length', value: selectedData.length },
    { label: 'Max atm. speed', value: selectedData.max_atmosphering_speed },
    { label: 'Crew', value: selectedData.crew },
    { label: 'Passengers', value: selectedData.passengers },
    { label: 'Cargo capacity', value: selectedData.cargo_capacity },
    { label: 'Consumables', value: selectedData.consumables },
    { label: 'Hyperdrive rating', value: selectedData.hyperdrive_rating },
    { label: 'MGLT', value: selectedData.MGLT },
    { label: 'Starship class', value: selectedData.starship_class },
    { label: 'Pilots', value: selectedData.pilots.map((pilot) => pilot.name) },
  ]

  return <DetailsPage title="Starships" backLink="/starships" data={data} information={starshipsInformation} />
}

export default StarshipsDetails
