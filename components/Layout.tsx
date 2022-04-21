import { Box, Center } from "@chakra-ui/react"
import NavBar from './NavBar'
import Footer from './Footer'
import Hero from '@components/Hero'

export default function Layout({ children }) {
    return (
        <>
            <Box h='calc(100vh)'>
                <NavBar />
                <Hero />
                <Footer />
            </Box>
        </>
    )
}