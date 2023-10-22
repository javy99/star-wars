import DetailsPage from './DetailsPage'
import { useCharacters } from '../hooks'
import { useParams } from 'react-router-dom'

const CharactersDetails = () => {
  const { id } = useParams()
  const { data, error } = useCharacters()

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
    : selectedData.homeworld.name

  const charactersInformation = [
    { label: 'Height', value: selectedData.height },
    { label: 'Mass', value: selectedData.mass },
    { label: 'Hair color', value: selectedData.hair_color },
    { label: 'Eye color', value: selectedData.eye_color },
    { label: 'Birth', value: selectedData.birth_year },
    { label: 'Gender', value: selectedData.gender },
    { label: 'Homeworld', value: homeworldNames },
    { label: 'Films', value: selectedData.films.map((film) => film.name).join(', ') },
    { label: 'Species', value: selectedData.species.map((specie) => specie.name).join(', ') },
    { label: 'Vehicles', value: selectedData.vehicles.map((vehicle) => vehicle.name).join(', ') },
    { label: 'Starships', value: selectedData.starships.map((starship) => starship.name).join(', ') },
  ]

  return <DetailsPage title="Characters" backLink="/characters" data={data} information={charactersInformation} />
}

export default CharactersDetails
