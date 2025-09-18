import React, { useState, useEffect } from 'react'
import { Box } from '@chakra-ui/react'
import { keyframes } from '@emotion/react'

const carMove = keyframes`
  0% {
    transform: translateY(-150vh) translateX(-15px) scale(0.6);
    opacity: 0;
  }
  5% {
    opacity: 1;
  }
  25% {
    transform: translateY(-20vh) translateX(-5px) scale(0.8);
    opacity: 1;
  }
  50% {
    transform: translateY(40vh) translateX(5px) scale(1);
    opacity: 1;
  }
  75% {
    transform: translateY(90vh) translateX(15px) scale(1.1);
    opacity: 1;
  }
  95% {
    transform: translateY(130vh) translateX(25px) scale(1.2);
    opacity: 0.8;
  }
  100% {
    transform: translateY(150vh) translateX(30px) scale(1.3);
    opacity: 0;
  }
`

const pageReveal = keyframes`
  0% {
    transform: translateY(100vh);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`

const trackLines = keyframes`
  0% {
    transform: translateY(0) translateX(-50%);
  }
  100% {
    transform: translateY(40px) translateX(-50%);
  }
`

const F1Car = () => (
  <svg
    width="70"
    height="140"
    viewBox="0 0 70 140"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))' }}
  >
    <ellipse cx="35" cy="130" rx="25" ry="6" fill="rgba(0,0,0,0.2)" />

    <rect x="32" y="5" width="6" height="15" rx="3" fill="#1A1A1A" />
    <rect x="28" y="8" width="3" height="12" rx="1.5" fill="#333" />
    <rect x="39" y="8" width="3" height="12" rx="1.5" fill="#333" />

    <path 
      d="M32 20 L30 35 L40 35 L38 20 Z" 
      fill="#FF3333" 
    />

    <path 
      d="M25 35 L30 45 L30 85 L25 95 L20 95 L15 85 L15 45 L20 35 Z" 
      fill="url(#carGradient)" 
    />
    <path 
      d="M45 35 L50 45 L50 85 L45 95 L40 95 L35 85 L35 45 L40 35 Z" 
      fill="url(#carGradient)" 
    />

    <rect x="25" y="40" width="20" height="45" rx="8" fill="url(#carGradient)" />

    <ellipse cx="35" cy="55" rx="8" ry="6" fill="url(#helmetGradient)" />
    <ellipse cx="35" cy="55" rx="6" ry="4" fill="rgba(255,255,255,0.3)" />
    
    <rect x="33" y="50" width="4" height="8" rx="2" fill="#000" />

    <rect x="28" y="65" width="6" height="25" rx="3" fill="#FF6666" />
    <rect x="36" y="65" width="6" height="25" rx="3" fill="#FF6666" />

    <g>
      <circle cx="15" cy="50" r="8" fill="#1A1A1A" />
      <circle cx="15" cy="50" r="6" fill="#333" opacity="0.8" />
      <circle cx="15" cy="50" r="3" fill="#666" />
      <rect x="13" y="46" width="4" height="8" rx="2" fill="#999" opacity="0.6" />
    </g>
    
    <g>
      <circle cx="55" cy="50" r="8" fill="#1A1A1A" />
      <circle cx="55" cy="50" r="6" fill="#333" opacity="0.8" />
      <circle cx="55" cy="50" r="3" fill="#666" />
      <rect x="53" y="46" width="4" height="8" rx="2" fill="#999" opacity="0.6" />
    </g>
    
    <g>
      <circle cx="15" cy="80" r="8" fill="#1A1A1A" />
      <circle cx="15" cy="80" r="6" fill="#333" opacity="0.8" />
      <circle cx="15" cy="80" r="3" fill="#666" />
      <rect x="13" y="76" width="4" height="8" rx="2" fill="#999" opacity="0.6" />
    </g>
    
    <g>
      <circle cx="55" cy="80" r="8" fill="#1A1A1A" />
      <circle cx="55" cy="80" r="6" fill="#333" opacity="0.8" />
      <circle cx="55" cy="80" r="3" fill="#666" />
      <rect x="53" y="76" width="4" height="8" rx="2" fill="#999" opacity="0.6" />
    </g>

    <rect x="20" y="100" width="30" height="8" rx="2" fill="#1A1A1A" />
    <rect x="22" y="108" width="26" height="4" rx="2" fill="#333" />
    <rect x="24" y="112" width="22" height="3" rx="1.5" fill="#666" />

    <g opacity="0.8">
      <line x1="5" y1="0" x2="5" y2="15" stroke="#FFF" strokeWidth="2" opacity="0.7" />
      <line x1="10" y1="2" x2="10" y2="12" stroke="#FFF" strokeWidth="1.5" opacity="0.5" />
      <line x1="0" y1="0" x2="0" y2="18" stroke="#FFF" strokeWidth="2.5" opacity="0.8" />
      <line x1="15" y1="0" x2="15" y2="20" stroke="#FFD700" strokeWidth="1.5" opacity="0.6" />
      <line x1="8" y1="3" x2="8" y2="15" stroke="#FF4500" strokeWidth="1" opacity="0.4" />
    </g>

    <path 
      d="M30 118 L28 130 L32 135 L36 130 L38 118 Z" 
      fill="url(#flameGradient)" 
      opacity="0.8"
    />
    
    <defs>
      <linearGradient id="carGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#FF0000" />
        <stop offset="50%" stopColor="#CC0000" />
        <stop offset="100%" stopColor="#990000" />
      </linearGradient>
      
      <radialGradient id="helmetGradient" cx="50%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#4169E1" />
        <stop offset="70%" stopColor="#1E90FF" />
        <stop offset="100%" stopColor="#0066CC" />
      </radialGradient>
      
      <linearGradient id="flameGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FF4500" />
        <stop offset="50%" stopColor="#FFD700" />
        <stop offset="100%" stopColor="#FFA500" />
      </linearGradient>
    </defs>
  </svg>
)

interface F1LoadingAnimationProps {
  onAnimationComplete: () => void
}

const F1LoadingAnimation: React.FC<F1LoadingAnimationProps> = ({ onAnimationComplete }) => {
  const [animationPhase, setAnimationPhase] = useState<'countdown' | 'go' | 'racing' | 'pulling' | 'complete'>('countdown')
  const [countdown, setCountdown] = useState(3)
  const [showCar, setShowCar] = useState(false)
  const [showPagePull, setShowPagePull] = useState(false)

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(countdownInterval)
          setAnimationPhase('go')
          return 0
        }
        return prev - 1
      })
    }, 600)

    const goTimer = setTimeout(() => {
      setAnimationPhase('racing')
      setShowCar(true)
    }, 2300)

    const racingTimer = setTimeout(() => {
      setAnimationPhase('pulling')
      setShowPagePull(true)
    }, 5800)

    const completeTimer = setTimeout(() => {
      setAnimationPhase('complete')
      setTimeout(() => {
        onAnimationComplete()
      }, 200)
    }, 7200)

    return () => {
      clearInterval(countdownInterval)
      clearTimeout(goTimer)
      clearTimeout(racingTimer)
      clearTimeout(completeTimer)
    }
  }, [onAnimationComplete])

  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      width="100vw"
      height="100vh"
      zIndex={9999}
      background="linear-gradient(135deg, #000428 0%, #004e92 100%)"
      overflow="hidden"
    >
      <Box
        position="absolute"
        top="0"
        left="50%"
        width="4px"
        height="120%"
        background="repeating-linear-gradient(to bottom, white 0px, white 20px, transparent 20px, transparent 40px)"
        animation={`${trackLines} 1s linear infinite`}
        opacity="0.4"
      />
      
      <Box
        position="absolute"
        top="0"
        left="30%"
        width="2px"
        height="120%"
        background="repeating-linear-gradient(to bottom, #FF6B6B 0px, #FF6B6B 15px, transparent 15px, transparent 30px)"
        animation={`${trackLines} 0.8s linear infinite`}
        opacity="0.2"
      />
      <Box
        position="absolute"
        top="0"
        right="30%"
        width="2px"
        height="120%"
        background="repeating-linear-gradient(to bottom, #4ECDC4 0px, #4ECDC4 15px, transparent 15px, transparent 30px)"
        animation={`${trackLines} 0.8s linear infinite reverse`}
        opacity="0.2"
      />
      
      {animationPhase === 'countdown' && countdown > 0 && (
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          zIndex={10001}
          textAlign="center"
        >
          <Box
            fontSize="6xl"
            fontWeight="bold"
            color="white"
            textShadow="0 0 20px rgba(255,255,255,0.8)"
            animation="countdown-pulse 0.6s ease-in-out"
            sx={{
              '@keyframes countdown-pulse': {
                '0%': { transform: 'scale(0.5)', opacity: 0 },
                '50%': { transform: 'scale(1.2)', opacity: 1 },
                '100%': { transform: 'scale(1)', opacity: 1 }
              }
            }}
          >
            {countdown}
          </Box>
          <Box
            fontSize="xl"
            color="rgba(255,255,255,0.8)"
            mt={4}
            fontFamily="monospace"
            letterSpacing="2px"
          >
            GET READY TO RACE
          </Box>
        </Box>
      )}

      {/* GO! Flash */}
      {animationPhase === 'go' && (
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          zIndex={10001}
          textAlign="center"
          animation="go-flash 0.5s ease-out"
          sx={{
            '@keyframes go-flash': {
              '0%': { transform: 'translate(-50%, -50%) scale(0.8)', opacity: 0 },
              '50%': { transform: 'translate(-50%, -50%) scale(1.3)', opacity: 1 },
              '100%': { transform: 'translate(-50%, -50%) scale(1)', opacity: 0 }
            }
          }}
        >
          <Box
            fontSize="8xl"
            fontWeight="bold"
            color="#00FF00"
            textShadow="0 0 30px rgba(0,255,0,0.8)"
          >
            GO!
          </Box>
        </Box>
      )}

      {showCar && (
        <Box
          position="absolute"
          left="50%"
          animation={`${carMove} 3.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`}
          transform="translateX(-50%)"
          zIndex={10000}
        >
          <F1Car />
        </Box>
      )}

      {showCar && (
        <>
          <Box
            position="absolute"
            left="48%"
            top="30%"
            width="8px"
            height="8px"
            background="rgba(255, 215, 0, 0.8)"
            borderRadius="50%"
            animation="particle1 3s ease-out forwards"
            sx={{
              '@keyframes particle1': {
                '0%': { transform: 'translate(0, 0) scale(0)', opacity: 0 },
                '20%': { opacity: 1 },
                '80%': { transform: 'translate(-20px, 80px) scale(1)', opacity: 1 },
                '100%': { transform: 'translate(-30px, 120px) scale(0)', opacity: 0 }
              }
            }}
          />
          
          <Box
            position="absolute"
            left="52%"
            top="35%"
            width="6px"
            height="6px"
            background="rgba(255, 69, 0, 0.6)"
            borderRadius="50%"
            animation="particle2 3.2s ease-out forwards"
            sx={{
              '@keyframes particle2': {
                '0%': { transform: 'translate(0, 0) scale(0)', opacity: 0 },
                '25%': { opacity: 1 },
                '75%': { transform: 'translate(25px, 90px) scale(1)', opacity: 1 },
                '100%': { transform: 'translate(35px, 130px) scale(0)', opacity: 0 }
              }
            }}
          />
          
          <Box
            position="absolute"
            left="50%"
            top="40%"
            width="4px"
            height="4px"
            background="rgba(135, 206, 250, 0.7)"
            borderRadius="50%"
            animation="particle3 2.8s ease-out forwards"
            sx={{
              '@keyframes particle3': {
                '0%': { transform: 'translate(0, 0) scale(0)', opacity: 0 },
                '30%': { opacity: 1 },
                '70%': { transform: 'translate(0px, 100px) scale(1)', opacity: 1 },
                '100%': { transform: 'translate(5px, 140px) scale(0)', opacity: 0 }
              }
            }}
          />
        </>
      )}

      {(animationPhase === 'racing' || animationPhase === 'pulling') && (
        <Box
          position="absolute"
          bottom="20%"
          left="50%"
          transform="translateX(-50%)"
          textAlign="center"
          color="white"
          fontFamily="monospace"
          zIndex={10001}
        >
          <Box fontSize="2xl" fontWeight="bold" mb={4}>
            {animationPhase === 'racing' ? 'RACING TO LOAD...' : ''}
          </Box>
          <Box 
            width="200px" 
            height="4px" 
            background="rgba(255,255,255,0.2)" 
            borderRadius="2px" 
            overflow="hidden"
          >
            <Box
              width="100%"
              height="100%"
              background="linear-gradient(90deg, #FF0000, #FFD700, #FF0000)"
              animation={`loading-bar ${animationPhase === 'racing' ? '3.5s' : '1.2s'} ease-out forwards`}
              sx={{
                '@keyframes loading-bar': {
                  '0%': { transform: 'translateX(-100%)' },
                  '100%': { transform: 'translateX(0%)' }
                }
              }}
            />
          </Box>
        </Box>
      )}

      {showPagePull && (
        <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          background="white"
          animation={`${pageReveal} 1.2s ease-out forwards`}
          zIndex={9998}
        />
      )}

      <Box
        position="absolute"
        bottom="-50px"
        left="0"
        width="100%"
        height="100px"
        background="repeating-conic-gradient(#000 0% 25%, #fff 0% 50%)"
        backgroundSize="20px 20px"
        opacity="0.1"
        transform="rotate(45deg)"
      />
    </Box>
  )
}

export default F1LoadingAnimation
