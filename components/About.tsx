import {
  Box,
  Text,
  Container,
  Stack,
  Heading
} from "@chakra-ui/react"
import NavBar from './NavBar'
import Footer from './Footer'
// import { useEffect, useState } from "react"

export default function Layout() {
    // const [scrollY, setScrollY] = useState(0)

    // useEffect(() => {
    //   const handleScroll = (e) => {
    //     setScrollY(window.scrollY)
    //   }

    //   window.addEventListener("scroll", e => handleScroll(e))
    //   return () => {
    //     window.removeEventListener("scroll", e => handleScroll(e))
    //   }
    // }, [])

    return (
        <>
            <Box h='calc(100vh)'>
                <NavBar />

                <Container maxW={'7xl'} pt='5vh' height={'100%'}>
                  <Stack
                    align={'center'}
                    spacing={{ base: 8, md: 10 }}
                    py={{ base: 20, md: 28 }}
                    direction={{ base: 'column', md: 'row' }}
                    >
                    <Stack flex={1} spacing={{ base: 5, md: 10 }}>
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
                          Raisha Syifa Wardhana
                        </Text>
                      </Heading>
                      <Text color={'gray.500'}>
                      Sesosok gadis bernama Raisha Syifa Wardhana yang memiliki nama panggilan Raisha, lahir pada 11 November 2007.
                      Raisha Syifa sempat diumumkan menjadi member JKT48 generasi 10 pada tanggal 27 Agustus 2020, namun sayang karena efek pandemi, 
                      pengumuman member generasi 10 ditunda hingga bulan Desember 2021. Setelah beberapa bulan menjalani trainee di JKT48, 
                      akhirnya pada 26 Maret 2022, Raisha berkesempatan untuk melakukan shonichi di setlist Seishun Girls. Raisha Memiliki hobi bermain 
                      bulutangkis dan basket. Walaupun masih berusia 15 tahun, namun Raisha merupakan member tertinggi di generasinya.
                      </Text>
                    </Stack>
                  </Stack>
                </Container>

                <Footer />
            </Box>
        </>
    )
}