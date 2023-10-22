import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === 'dark' ? 'black' : 'white',
      },
      'html, body': {
        fontSize: '14px',
        fontWeight: 'normal',
      },
    }),
  },
  fonts: {
    body: 'Poppins, sans-serif',
  },
})

export default theme
