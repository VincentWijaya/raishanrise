import { Box } from "@chakra-ui/react"
import NavBar from './NavBar'
import Footer from './Footer'
import Hero from '@components/Hero'
import ScrollTop from './scrolltop'
import SEO from './SEO'
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Layout() {
    return (
        <>
            <Box h='calc(100vh)'>
                <SEO />
                <SpeedInsights/>
                <NavBar />

                <Hero />

                <Footer />
                <ScrollTop/>
            </Box>
        </>
    )
}