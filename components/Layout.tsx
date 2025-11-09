import { Box } from "@chakra-ui/react"
import NavBar from './NavBar'
import Footer from './Footer'
import Hero from '@components/Hero'
import ScrollTop from './scrolltop'
import SEO from './SEO'
import Countdown from './Countdown'
import { SpeedInsights } from '@vercel/speed-insights/next'

export default function Layout() {
    return (
        <>
          <Box>
              <SEO />
              <SpeedInsights/>
              <NavBar />

              <Countdown />
              <Hero />

              <Footer />
              <ScrollTop/>
          </Box>
        </>
    )
}