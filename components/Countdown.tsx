import {
  Container,
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  useColorModeValue,
  Image,
  Divider,
  useBreakpointValue,
  Stack,
} from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import Confetti from 'react-confetti'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [isFinished, setIsFinished] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

  const showCountdown = process.env.NEXT_PUBLIC_SHOW_COUNTDOWN === 'true'
  const countdownDate = process.env.NEXT_PUBLIC_COUNTDOWN_DATE
  const showBanner = process.env.NEXT_PUBLIC_SHOW_BANNER === 'true'

  const bannerImage = useBreakpointValue({
    base: '/images/header-mobile.png',
    md: '/images/header.png',
  })

  useEffect(() => {
    const updateWindowSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }
    
    if (typeof window !== 'undefined') {
      updateWindowSize()
      window.addEventListener('resize', updateWindowSize)
      return () => window.removeEventListener('resize', updateWindowSize)
    }
  }, [])

  useEffect(() => {
    if (!showCountdown || !countdownDate) {
      return
    }

    const targetDate = new Date(countdownDate).getTime()

    const timer = setInterval(() => {
      const now = new Date()
      const utc = now.getTime() + (now.getTimezoneOffset() * 60000)
      const gmt7Time = new Date(utc + (7 * 3600000)).getTime()
      
      const difference = targetDate - gmt7Time

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        setIsFinished(true)
        setShowConfetti(true)
        clearInterval(timer)

        setTimeout(() => {
          setShowConfetti(false)
        }, 15000)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [showCountdown, countdownDate])

  const banner = () => {
    return (
      <Image
        alt={'Header 18 and beyond'}
        src={bannerImage}
        objectFit="contain"
      />
    )
  }

  const cardBg = useColorModeValue('gray.50', 'gray.700')
  const textColor = useColorModeValue('gray.800', 'white')
  const accentColor = useColorModeValue('blue.600', 'blue.300')

  if (!showCountdown) {
    return null
  }

  if (isFinished) {
    return (
      <>
        {showConfetti && (
          <Confetti
            width={windowSize.width}
            height={windowSize.height}
            recycle={false}
            numberOfPieces={500}
            gravity={0.3}
          />
        )}

        {showBanner && (
          <Box w="100%" pt={{ base: '33%', md: '6%' }} display="flex" justifyContent="center" alignItems="center">
            {banner()}
          </Box>
        )}
      </>
    )
  }

  return (
    <Container maxW="6xl" py={{ base: 40, md: 40 }}>
      <VStack spacing={8}>
        <VStack spacing={4} textAlign="center">
          <Heading
            size="2xl"
            bgGradient="linear(to-r, blue.600, purple.600)"
            bgClip="text"
          >
            Raisha Syifa Wardhana's Birthday
          </Heading>
        </VStack>

        <HStack
          spacing={{ base: 4, md: 8 }}
          wrap="wrap"
          justify="center"
          align="center"
        >
          <VStack
            bg={cardBg}
            p={6}
            borderRadius="xl"
            shadow="lg"
            minW="120px"
            transition="all 0.3s"
            _hover={{ transform: 'translateY(-2px)', shadow: 'xl' }}
          >
            <Text
              fontSize="4xl"
              fontWeight="bold"
              color={accentColor}
              lineHeight="1"
            >
              {timeLeft.days.toString().padStart(2, '0')}
            </Text>
            <Text fontSize="sm" color={textColor} fontWeight="medium">
              DAYS
            </Text>
          </VStack>

          <Divider orientation="vertical" h="80px" display={{ base: 'none', md: 'block' }} />
          <Text fontSize="2xl" color={accentColor} display={{ base: 'block', md: 'none' }}>:</Text>

          <VStack
            bg={cardBg}
            p={6}
            borderRadius="xl"
            shadow="lg"
            minW="120px"
            transition="all 0.3s"
            _hover={{ transform: 'translateY(-2px)', shadow: 'xl' }}
          >
            <Text
              fontSize="4xl"
              fontWeight="bold"
              color={accentColor}
              lineHeight="1"
            >
              {timeLeft.hours.toString().padStart(2, '0')}
            </Text>
            <Text fontSize="sm" color={textColor} fontWeight="medium">
              HOURS
            </Text>
          </VStack>

          <Divider orientation="vertical" h="80px" display={{ base: 'none', md: 'block' }} />
          <Text fontSize="2xl" color={accentColor} display={{ base: 'block', md: 'none' }}>:</Text>

          <VStack
            bg={cardBg}
            p={6}
            borderRadius="xl"
            shadow="lg"
            minW="120px"
            transition="all 0.3s"
            _hover={{ transform: 'translateY(-2px)', shadow: 'xl' }}
          >
            <Text
              fontSize="4xl"
              fontWeight="bold"
              color={accentColor}
              lineHeight="1"
            >
              {timeLeft.minutes.toString().padStart(2, '0')}
            </Text>
            <Text fontSize="sm" color={textColor} fontWeight="medium">
              MINUTES
            </Text>
          </VStack>

          <Divider orientation="vertical" h="80px" display={{ base: 'none', md: 'block' }} />
          <Text fontSize="2xl" color={accentColor} display={{ base: 'block', md: 'none' }}>:</Text>

          <VStack
            bg={cardBg}
            p={6}
            borderRadius="xl"
            shadow="lg"
            minW="120px"
            transition="all 0.3s"
            _hover={{ transform: 'translateY(-2px)', shadow: 'xl' }}
          >
            <Text
              fontSize="4xl"
              fontWeight="bold"
              color={accentColor}
              lineHeight="1"
            >
              {timeLeft.seconds.toString().padStart(2, '0')}
            </Text>
            <Text fontSize="sm" color={textColor} fontWeight="medium">
              SECONDS
            </Text>
          </VStack>
        </HStack>

        <Text fontSize="md" color="gray.500" textAlign="center" maxW="md">
          Mark your calendars! We're counting down to something special.
        </Text>
      </VStack>
    </Container>
  )
}