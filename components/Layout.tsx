import { Box } from "@chakra-ui/react"
import { useState, useEffect } from "react"
import NavBar from './NavBar'
import Footer from './Footer'
import Hero from '@components/Hero'
import ScrollTop from './scrolltop'
import SEO from './SEO'
import F1LoadingAnimation from './F1LoadingAnimation'
import { SpeedInsights } from '@vercel/speed-insights/next'

export default function Layout() {
    const [isLoading, setIsLoading] = useState(true)
    const [showAnimation, setShowAnimation] = useState(false)
    const [isAnimationComplete, setIsAnimationComplete] = useState(false)

    useEffect(() => {
        if (isLoading && typeof window !== 'undefined') {
            document.body.style.overflow = 'hidden'
            document.body.style.height = '100vh'
        } else if (typeof window !== 'undefined') {
            document.body.style.overflow = 'auto'
            document.body.style.height = 'auto'
        }

        const timer = setTimeout(() => {
            setShowAnimation(true)
        }, 200)

        return () => {
            clearTimeout(timer)
            if (typeof window !== 'undefined') {
                document.body.style.overflow = 'auto'
                document.body.style.height = 'auto'
            }
        }
    }, [isLoading])

    const handleAnimationComplete = () => {
        console.log('🏁 F1 Animation Complete - Loading Main Page')
        setIsAnimationComplete(true)

        setTimeout(() => {
            setIsLoading(false)
            if (typeof window !== 'undefined') {
                document.body.style.overflow = 'auto'
                document.body.style.height = 'auto'
                console.log('✅ Main Page Loaded Successfully')
            }
        }, 300)
    }

    if (!showAnimation) {
        return (
            <Box 
                position="fixed" 
                top="0" 
                left="0" 
                width="100vw" 
                height="100vh" 
                background="linear-gradient(135deg, #000428 0%, #004e92 100%)" 
                zIndex={9999}
            />
        )
    }

    return (
        <>
          {isLoading && !isAnimationComplete && (
            <F1LoadingAnimation onAnimationComplete={handleAnimationComplete} />
          )}

          {!isLoading && (
            <Box 
              h='calc(100vh)'
              style={{
                opacity: isAnimationComplete ? 1 : 0,
                transform: isAnimationComplete ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.6s ease-out',
              }}
            >
              <SEO />
              <SpeedInsights/>
              <NavBar />

              <Hero />

              <Footer />
              <ScrollTop/>
            </Box>
          )}
        </>
    )
}