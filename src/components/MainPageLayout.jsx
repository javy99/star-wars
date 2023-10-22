import { useState } from 'react'
import PropTypes from 'prop-types'
import { Flex, Heading, SimpleGrid, Menu, MenuButton, MenuList, MenuItem, Button, Box } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import Pagination from './Pagination'

const MainPageLayout = ({
  title,
  data,
  error,
  renderCard,
  showMenu,
  sortBy,
  handleMenuItemClick,
  showPagination,
  cardsPerPage,
}) => {
  MainPageLayout.propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
    error: PropTypes.string,
    renderCard: PropTypes.func.isRequired,
    showMenu: PropTypes.bool.isRequired,
    showPagination: PropTypes.bool.isRequired,
    sortBy: PropTypes.string,
    handleMenuItemClick: PropTypes.func,
    cardsPerPage: PropTypes.number,
  }

  const [currentPage, setCurrentPage] = useState(1)

  // Calculate the indexes and current cards
  let currentCards = data
  if (showPagination) {
    const lastCardIndex = currentPage * cardsPerPage
    const firstCardIndex = lastCardIndex - cardsPerPage
    currentCards = data.slice(firstCardIndex, lastCardIndex)
  }

  return (
    <Box
      style={{
        backgroundColor: '#F6F6F6',
        marginBottom: '80px',
        padding: '24px 24px 40px 24px',
        color: '#000',
      }}
    >
      <Flex alignItems="center" marginBottom="24px" justifyContent="space-between">
        <Heading fontSize="28px" fontWeight={600}>
          {title}
        </Heading>
        {showMenu && (
          <Menu>
            <MenuButton color="#000" as={Button} rightIcon={<ChevronDownIcon />}>
              <span className="dropdown_menu_btn">Sort by: </span> {sortBy}
            </MenuButton>
            <MenuList className="dropdown_menu">
              <MenuItem className="dropdown_menu_item" onClick={() => handleMenuItemClick('Date')}>
                Date
              </MenuItem>
              <MenuItem className="dropdown_menu_item" onClick={() => handleMenuItemClick('Name')}>
                Name
              </MenuItem>
              <MenuItem className="dropdown_menu_item" onClick={() => handleMenuItemClick('Episode')}>
                Episode
              </MenuItem>
            </MenuList>
          </Menu>
        )}
      </Flex>

      {error ? (
        <p>Error: {error}</p>
      ) : (
        <SimpleGrid columns={2} spacing={'20px'}>
          {currentCards.map(renderCard)}
        </SimpleGrid>
      )}

      {showPagination && cardsPerPage && (
        <Pagination
          totalCards={data.length}
          cardsPerPage={cardsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      )}
    </Box>
  )
}

export default MainPageLayout
