import { extendTheme } from '@chakra-ui/react'

/** INFO: Here you can customize the global theme setting for Chakra UI */
const theme = extendTheme({
  colors: {
    fonts: {
      heading: `'Lato', sans-serif`,
      body: `'Lato', sans-serif`,
    },
  },
})

export default theme
