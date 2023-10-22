import { Link as RouterLink, useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Box, Link, Text, HStack, Image, Heading, Flex, Card, CardBody } from '@chakra-ui/react'

const DetailsPage = ({ title, backLink, data, information }) => {
  const { id } = useParams()
  const selectedMovie = data.find((movie) => movie.id === Number(id))

  const imageStyles = {
    width: '281px',
    height: '400px',
    objectFit: 'cover',
    objectPosition: 'center',
    position: 'relative',
  }

  const labelStyles = {
    position: 'absolute',
    backgroundColor: '#FFE81F',
    color: '#000',
    fontSize: '12px',
    fontFamily: "'Roboto', sans-serif",
    fontWeight: 700,
    width: '53px',
    height: '38px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '0 2px 2px 0',
  }

  if (!selectedMovie) {
    return (
      <Box
        style={{
          backgroundColor: '#F6F6F6',
          marginBottom: '80px',
          padding: '24px 24px 40px 24px',
          color: '#000',
        }}
      >
        Loading...
      </Box>
    )
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
      <Box style={{ fontSize: '14px', fontWeight: 600, color: '#A6A6A6' }}>
        <Link as={RouterLink} to="/" style={{ textDecoration: 'none', color: '#9F910F' }}>
          Home{' '}
        </Link>
        <Link as={RouterLink} to={backLink} style={{ textDecoration: 'none' }}>
          / {title}
        </Link>
      </Box>
      <Card mt="24px" borderRadius={0} backgroundColor="F6F6F6" color="000" boxShadow={'none'}>
        <HStack alignItems="flex-start">
          <Image src={selectedMovie.src} alt={selectedMovie.name} style={imageStyles} />
          {title === 'Episodes' && <Box style={labelStyles}>18+</Box>}
          <CardBody mt="-20px">
            <Heading fontSize="24px" fontWeight="600" marginBottom="25px">
              {title === 'Episodes'
                ? 'Star Wars: Episode ' + selectedMovie.id + ' - ' + selectedMovie.name
                : selectedMovie.name}
            </Heading>
            {information.map((infoItem) => (
              <Flex fontSize="14px" key={infoItem.label} justifyContent={'space-between'}>
                <Text fontWeight={500} color="#A6A6A6" flexBasis="20%" marginBottom="18px">
                  {infoItem.label}:
                </Text>
                <Text fontWeight={400} color="#0E0E0E" flexBasis="75%">
                  {infoItem.value}
                </Text>
              </Flex>
            ))}
          </CardBody>
        </HStack>
      </Card>
    </Box>
  )
}

DetailsPage.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  backLink: PropTypes.string.isRequired,
  data: PropTypes.object,
  information: PropTypes.object,
}

export default DetailsPage
