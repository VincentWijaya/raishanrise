import {
  Box,
  Text,
  Container,
  Stack,
  Avatar
} from "@chakra-ui/react"
import NavBar from './NavBar'
import Footer from './Footer'
import SEO from './SEO'

export default function Layout() {
    const desc = 'Raishanrise, merupakan Fanbase utama dari member generasi 10, Raisha Syifa Wardhana. Raishanrise sendiri diambil dari 2 kata yaitu Raisha n Rise, yang memiliki arti Raisha berkembang, atau bisa diartikan juga terbitnya Raisha, Raishanrise memiliki cita-cita untuk mendukung dalam semua harapan Raisha di JKT48 maupun diluar dari itu'
    return (
        <>
            <Box h='calc(100vh)'>
                <SEO description={ desc } image='https://raishanrise.my.id/images/favicon.svg' title='About - Raishanrise Official Website'/>
                <NavBar />

                <Container maxW={'7xl'} pt='10vh' height={'100%'}>
                  <Stack
                    align={'center'}
                    spacing={{ base: 8, md: 10 }}
                    py={{ base: 20, md: 28 }}
                    pb='30vh'
                    direction={{ base: 'column', sm: 'row' }}
                    >
                      <Avatar
                        size={'3xl'}
                        src='/images/raishanrise.jpeg'
                        css={{
                          border: '2px solid grey',
                        }}
                      />

                      <Text color={'gray.500'} align='center'>{ desc }</Text>
                  </Stack>
                </Container>

                <Footer />
            </Box>
        </>
    )
}