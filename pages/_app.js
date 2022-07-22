import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return(<ChakraProvider>
    <Component {...pageProps} />
  </ChakraProvider>)
}

export default MyApp

<<<<<<< HEAD
=======
// Language: javascript ecosystem
>>>>>>> 203cae6270235277f00062ba584db28ec62f861a
