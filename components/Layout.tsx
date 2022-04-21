import { Box, ScaleFade } from "@chakra-ui/react"
import NavBar from './NavBar'
import Footer from './Footer'
import Hero from '@components/Hero'
import { useEffect, useState } from "react"

export default function Layout() {
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
      const handleScroll = (e) => {
        setScrollY(window.scrollY)
      }

      window.addEventListener("scroll", e => handleScroll(e))
      return () => {
        window.removeEventListener("scroll", e => handleScroll(e))
      }
    }, [])

    return (
        <>
            <Box h='calc(100vh)'>
                {/* <ScaleFade
                  initialScale={0.9}
                  in={
                    scrollY > 50 ? false : true
                  }
                >
                  <NavBar />
                </ScaleFade> */}
                <NavBar />
                <Hero />
                <Footer />
            </Box>
        </>
    )
}