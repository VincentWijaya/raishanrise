import {
  Flex,
  VStack,
  Text,
  StackDivider
} from '@chakra-ui/react'

export default function Stats() {
  const stats = {
    show: '78',
    setlist: '1',
    unitSong: '1'
  }

  return (
    <Flex alignItems='center' maxW={'10xl'} mt='7vh' bgColor='blue.400' height='35%'>
      <VStack
        spacing={{ base: 4, sm: 6 }}
        divider={<StackDivider borderColor='gray.200' />}
        align='inherit'
        mx='auto'
      >

      <Text mt='2vh' fontSize='3xl' opacity='0.9'>
        {stats.show} Show
      </Text>

      <Text fontSize='3xl' opacity='0.9'>
        {stats.unitSong} Unit Song
      </Text>

      <Text fontSize='3xl' opacity='0.9'>
        {stats.setlist} Setlist
      </Text>

      </VStack>
    </Flex>
  )
}