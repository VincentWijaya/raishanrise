import { Box, Text } from "@chakra-ui/react"
import NavBar from './NavBar'
import Footer from './Footer'
import Hero from '@components/Hero'
import { useEffect, useState } from "react"

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
                <Hero />
                <Footer />
            </Box>
        </>
    )
}