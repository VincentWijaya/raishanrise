import { Box, Center } from "@chakra-ui/react"
import NavBar from './NavBar'

export default function Layout({ children }) {
    return (
        <>
            <Box>
                <NavBar />
                <Center>
                    {children}
                </Center>
            </Box>
        </>
    )
}