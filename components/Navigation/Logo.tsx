import React from "react"
import { Box, useColorModeValue } from "@chakra-ui/react"
import Typed from "react-typed"

export default function Logo(props) {
  return (
    <Box {...props}>
      <Typed
            strings={['Raisha Syifa.', 'Raishanrise.']}
            typeSpeed={70}
            backSpeed={80}
            loop
            style={
              { color: useColorModeValue('black', 'white'),
                fontWeight:'bold',
              }
            }
      />
    </Box>
  )
}