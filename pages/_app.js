import { ChakraProvider } from '@chakra-ui/react'
import { ColorModeProvider } from "@chakra-ui/react"
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Head>
        <title>Raishanrise</title>
        <meta name="description" content="Official Raisha Syifa fanbase website" />
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
      </Head>
      <ColorModeProvider options={{ initialColorMode: 'dark', useSystemColorMode: true }} />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp