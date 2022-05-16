import {
  Box,
  Text,
  Container,
  Stack,
  Heading
} from "@chakra-ui/react"
import NavBar from './NavBar'
import Footer from './Footer'
import SEO from './SEO'

export default function Layout() {
    return (
        <>
            <Box h='calc(100vh)'>
                <SEO description='Join raisha syifa wardhana fanbase - raishanrise' image='https://raishanrise.my.id//images/raishanrise.jpeg' title='Join - Raishanrise Official Website'/>
                <NavBar />

                <Container maxW={'7xl'} pt='10vh' height={'100%'}>
                  <Stack
                    align={'center'}
                    spacing={{ base: 8, md: 10 }}
                    py={{ base: 20, md: 28 }}
                    pb='30vh'
                    direction={{ base: 'column', sm: 'column' }}
                  >
                    <Heading
                      lineHeight={1.1}
                      fontWeight={600}
                      fontSize={{ base: '2xl', sm: '4xl', lg: '6xl' }}>
                      <Text
                        as={'span'}
                        position={'inherit'}
                        _after={{
                          content: "''",
                          width: 'full',
                          height: '20%',
                          position: 'absolute',
                          bottom: 1,
                          left: 0,
                          zIndex: -1,
                        }}>
                        Join Us
                      </Text>
                    </Heading>
                  </Stack>
                </Container>

                <Footer />
            </Box>
        </>
    )
}