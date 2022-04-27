import { ChakraProvider } from '@chakra-ui/react'
import { ColorModeProvider } from "@chakra-ui/react"
import Head from 'next/head'
import SEO from '../components/SEO'

const poorMe = () => {
  console.log('%c Made with ❤️ by :', 'font-size: 20px')
  console.log('%c kuli_coding', 'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)')
  console.log(`%c Even though I'm not getting paid from this 😢`, 'font-size: 10px')
}

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Head>
        <link rel="shortcut icon" type='image/x-icon' href="/images/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
      </Head>
      <SEO />
      <ColorModeProvider options={{ initialColorMode: 'light', useSystemColorMode: true }} />
      <Component {...pageProps} />
      { poorMe() }
    </ChakraProvider>
  )
}

export default MyApp