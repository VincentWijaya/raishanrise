import { Box, Center } from "@chakra-ui/react"
import NavBar from './NavBar'
import Footer from './Footer'

export default function Layout({ children }) {
    return (
        <>
            <Box h='calc(100vh)'>
                <NavBar />
                <Center>
                    {children}
                </Center>
                <Footer />
            </Box>
        </>
    )
}