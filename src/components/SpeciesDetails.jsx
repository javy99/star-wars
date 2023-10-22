import DetailsPage from './DetailsPage'
import { useSpecies } from '../hooks'
import { useParams } from 'react-router-dom'

const SpeciesDetails = () => {
  const { id } = useParams()
  const { data, error } = useSpecies()

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

  const homeworldNames = Array.isArray(selectedData.homeworld)
    ? selectedData.homeworld.map((home) => home.name).join(', ')
    : selectedData.homeworld
    ? selectedData.homeworld.name
    : 'n/a'

  const speciesInformation = [
    { label: 'Classification', value: selectedData.classification },
    { label: 'Designation', value: selectedData.designation },
    { label: 'Average height', value: selectedData.average_height },
    { label: 'Hair colors', value: selectedData.hair_colors },
    { label: 'Eye colors', value: selectedData.eye_colors },
    { label: 'Average lifespan', value: selectedData.average_lifespan },
    { label: 'Homeworld', value: homeworldNames },
    { label: 'Language', value: selectedData.language },
    { label: 'People', value: selectedData.people.map((person) => person.name).join(', ') },
    { label: 'Films', value: selectedData.films.map((film) => film.name).join(', ') },
  ]

  return <DetailsPage title="Species" backLink="/species" data={data} information={speciesInformation} />
}

export default SpeciesDetails
