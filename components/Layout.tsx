import { Box, Text } from "@chakra-ui/react"
import NavBar from './NavBar'
import Footer from './Footer'
import Hero from '@components/Hero'
import ScrollTop from './scrolltop'

export default function Layout() {
    return (
        <>
            <Box h='calc(100vh)'>
                <NavBar />

                <Hero />

                <Footer />
                <ScrollTop/>
            </Box>
        </>
    )
}