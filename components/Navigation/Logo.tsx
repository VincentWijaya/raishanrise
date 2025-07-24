import React from "react"
import { Box, useColorModeValue } from "@chakra-ui/react"
import { ReactTyped } from "react-typed"

export default function Logo(props) {
  return (
    <Box {...props}>
      <ReactTyped
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