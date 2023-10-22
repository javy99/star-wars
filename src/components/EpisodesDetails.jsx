import DetailsPage from './DetailsPage'
import { useFilms } from '../hooks'
import { useParams } from 'react-router-dom'

const EpisodesDetails = () => {
  const { id } = useParams()
  const { data, error } = useFilms()

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

  const episodesInformation = [
    { label: 'Episode', value: `Episode ${selectedData.id}` },
    { label: 'Director', value: selectedData.director },
    { label: 'Producer', value: selectedData.producer },
    { label: 'Release Date', value: selectedData.release_date },
    {
      label: 'Characters',
      value: selectedData.characters.map((character) => character.name).join(', '),
    },
    { label: 'Planets', value: selectedData.planets.map((planet) => planet.name).join(', ') },
    { label: 'Starships', value: selectedData.starships.map((starship) => starship.name).join(', ') },
    { label: 'Vehicles', value: selectedData.vehicles.map((vehicle) => vehicle.name).join(', ') },
    { label: 'Species', value: selectedData.species.map((specie) => specie.name).join(', ') },
    { label: 'Created', value: selectedData.created },
    { label: 'Edited', value: selectedData.edited },
  ]

  return <DetailsPage title="Episodes" backLink="/episodes" data={data} information={episodesInformation} />
}

export default EpisodesDetails
