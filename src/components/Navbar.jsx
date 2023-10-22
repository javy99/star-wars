import React, { useState } from 'react'
import { HStack, UnorderedList, ListItem, Flex, Link as ChakraLink } from '@chakra-ui/react'
import { NavLink, Link as ReactRouterLink, useLocation } from 'react-router-dom'
import {
  EpisodesIcon,
  CharactersIcon,
  PlanetsIcon,
  SpeciesIcon,
  VehiclesIcon,
  StarshipsIcon,
  LogoIcon,
} from '../assets/icons'

const navItems = [
  { label: 'Episodes', icon: <EpisodesIcon />, to: '/episodes' },
  { label: 'Characters', icon: <CharactersIcon />, to: '/characters' },
  { label: 'Planets', icon: <PlanetsIcon />, to: '/planets' },
  { label: 'Species', icon: <SpeciesIcon />, to: '/species' },
  { label: 'Vehicles', icon: <VehiclesIcon />, to: '/vehicles' },
  { label: 'Starships', icon: <StarshipsIcon />, to: '/starships' },
]

const Navbar = () => {
  const location = useLocation()
  const [hoveredItem, setHoveredItem] = useState(null)

  const handleMouseEnter = (itemLabel) => {
    setHoveredItem(itemLabel)
  }

  const handleMouseLeave = () => {
    setHoveredItem(null)
  }

  const isItemHovered = (itemLabel) => {
    return itemLabel === hoveredItem
  }

  const isItemActive = (item) => {
    return item.to === '/' && location.pathname === '/episodes'
  }

  return (
    <HStack justifyContent="space-between" paddingX={'80px'}>
      <ChakraLink paddingY="24px" as={ReactRouterLink} to="/">
        <LogoIcon />
      </ChakraLink>
      <UnorderedList display="flex" justifyContent="center" listStyleType="none">
        {navItems.map((item) => (
          <ListItem
            key={item.label}
            marginLeft="32px"
            fontWeight={600}
            onMouseEnter={() => handleMouseEnter(item.label)}
            onMouseLeave={handleMouseLeave}
            display="flex"
          >
            <NavLink
              className={`nav-link ${isItemActive(item) ? 'active' : ''}`}
              marginLeft="8px"
              style={{ textDecoration: 'none', marginLeft: '8px' }}
              to={item.to}
              activeClassName="active"
              exact={item.to === '/' && location.pathname === '/episodes'}
            >
              <Flex align="center">
                {React.cloneElement(item.icon, {
                  color: isItemHovered(item.label) || window.location.pathname === item.to ? '#FFE81F' : '#FFF',
                })}
                <span style={{ marginLeft: '8px' }}>{item.label}</span>
              </Flex>
            </NavLink>
          </ListItem>
        ))}
      </UnorderedList>
    </HStack>
  )
}

export default Navbar
