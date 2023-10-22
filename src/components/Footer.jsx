import { Box, Flex, Text, UnorderedList, ListItem } from '@chakra-ui/react'

const footerItems = ['Help', 'Contacts']

const Footer = () => (
  <Box bg="#292929" color="white" px={'80px'} py={'20px'}>
    <Flex justifyContent="space-between" alignItems="center">
      <Text color="#A6A6A6">© 2023 Javy</Text>
      <UnorderedList display="flex" listStyleType="none">
        {footerItems.map((item) => (
          <ListItem key={item} marginLeft="24px">
            <Text fontWeight={600}>{item}</Text>
          </ListItem>
        ))}
      </UnorderedList>
    </Flex>
  </Box>
)

export default Footer
