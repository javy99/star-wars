import { Link } from 'react-router-dom'
import { useCharacters, useCardClick } from '../hooks'
import MovieCard from './MovieCard'
import MainPageLayout from './MainPageLayout'

const Characters = () => {
  const { data, error } = useCharacters()
  const { handleCardClick } = useCardClick()

  return (
    <>
      <MainPageLayout
        title="Characters"
        data={data}
        error={error}
        renderCard={(character) => (
          <Link to={`/characters/${character.id}`} key={character.id} onClick={() => handleCardClick(character)}>
            <MovieCard
              key={character.id}
              imageUrl={character.src}
              title={character.name}
              details={[
                { heading: 'Birth', info: character.birth_year },
                { heading: 'Gender', info: character.gender },
              ]}
            />
          </Link>
        )}
        showMenu={false}
        showPagination={true}
        cardsPerPage={6}
      />
    </>
  )
}

export default Characters
