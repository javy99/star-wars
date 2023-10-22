import PropTypes from 'prop-types'
import { Card, CardBody, HStack, Stack, Flex, Heading, Image, Text, Box } from '@chakra-ui/react'

const MovieCard = ({ imageUrl, title, details }) => {
  const imageStyles = {
    width: '158px',
    height: '224px',
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
  const isEpisode = title.includes('Episode')

  return (
    <Card style={{ backgroundColor: '#fff', color: '#000' }} borderRadius={0} p={'24px'}>
      <HStack alignItems="flex-start">
        <Image src={imageUrl} alt={title} style={imageStyles} />
        {isEpisode && <Box style={labelStyles}>18+</Box>}
        <CardBody padding="0 20px">
          <Heading fontSize="24px" fontWeight={600} marginBottom="24px">
            {title}
          </Heading>
          <Stack direction="column" spacing={2}>
            {details.map((detail, index) => (
              <Flex key={index} fontSize="14px" justifyContent={'space-between'}>
                <Text fontWeight={500} color="#A6A6A6" flexBasis="35%" marginBottom="16px">
                  {detail.heading}:
                </Text>
                <Text fontWeight={400} color="#0E0E0E" flexBasis="60%">
                  {detail.info}
                </Text>
              </Flex>
            ))}
          </Stack>
        </CardBody>
      </HStack>
    </Card>
  )
}

MovieCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  details: PropTypes.array.isRequired,
}

export default MovieCard
