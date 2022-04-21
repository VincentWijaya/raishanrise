import { Box, ScaleFade } from "@chakra-ui/react"
import NavBar from './NavBar'
import Footer from './Footer'
import Hero from '@components/Hero'
import { useEffect, useState } from "react"

export default function Layout() {
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
      const handleScroll = () => {
        setScrollY(window.scrollY)
      }

      handleScroll()

      window.addEventListener("scroll", handleScroll)
      return () => {
        window.removeEventListener("scroll", handleScroll)
      }
    }, [])

    return (
        <>
            <Box h='calc(100vh)'>
            {console.log(`\n ===> ` +scrollY)}
                <ScaleFade
                  initialScale={0.9}
                  in={
                    scrollY > 50 ? false : true
                  }
                >
                  <NavBar />
                </ScaleFade>
                <Hero />
                <ScaleFade
                  initialScale={0.9}
                  in={
                    scrollY > 100 ? true : false
                  }
                >
                  <Footer />
                </ScaleFade>
            </Box>
        </>
    )
}