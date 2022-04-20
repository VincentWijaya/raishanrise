import React from "react"
import { Box, Text, useColorModeValue } from "@chakra-ui/react"

export default function Logo(props) {
  return (
    <Box {...props}>
      <Text fontSize="2xl" fontWeight="bold" color={useColorModeValue('black', 'white')} px={4}>
        Raisha Syifa.
      </Text>
    </Box>
  )
}