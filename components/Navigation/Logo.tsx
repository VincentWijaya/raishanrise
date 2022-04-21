import React from "react"
import { Box, Text, useColorModeValue } from "@chakra-ui/react"
import Typed from "react-typed"

export default function Logo(props) {
  return (
    <Box {...props}>
      {/* <Text fontSize="2xl" fontWeight="bold" color={useColorModeValue('black', 'white')} px={4}>
        Raisha Syifa.
      </Text> */}
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