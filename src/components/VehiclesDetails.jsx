import DetailsPage from './DetailsPage'
import { useVehicles } from '../hooks'
import { useParams } from 'react-router-dom'

const SpeciesDetails = () => {
  const { id } = useParams()
  const { data, error } = useVehicles()

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

  const vehiclesInformation = [
    { label: 'Type', value: selectedData.type },
    { label: 'Manufacturer', value: selectedData.manufacturer },
    { label: 'Crew', value: selectedData.crew },
    { label: 'Passengers', value: selectedData.passengers },
    { label: 'Weapons', value: selectedData.weapons },
    { label: 'Top speed', value: selectedData.top_speed },
    { label: 'Description', value: selectedData.description },
  ]

  return <DetailsPage title="Vehicles" backLink="/vehicles" data={data} information={vehiclesInformation} />
}

export default SpeciesDetails
