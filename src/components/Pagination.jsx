import PropTypes from 'prop-types'
import { Button, Box, HStack } from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'

const Pagination = ({ totalCards, cardsPerPage, setCurrentPage, currentPage }) => {
  let pages = []

  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pages.push(i)
  }

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    if (currentPage < pages.length) {
      setCurrentPage(currentPage + 1)
    }
  }

  return (
    <Box className="pagination">
      <HStack spacing={2}>
        {currentPage !== 1 && (
          <Button type="button" onClick={handlePreviousPage}>
            <ChevronLeftIcon boxSize={5} />
          </Button>
        )}
        {pages.map((page, index) => (
          <Button
            type="button"
            key={index}
            onClick={() => setCurrentPage(page)}
            className={page === currentPage ? 'active' : ''}
          >
            {page}
          </Button>
        ))}
        {currentPage !== pages.length && (
          <Button onClick={handleNextPage}>
            <ChevronRightIcon boxSize={5} />
          </Button>
        )}
      </HStack>
    </Box>
  )
}

Pagination.propTypes = {
  totalCards: PropTypes.number.isRequired,
  cardsPerPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
}

export default Pagination
