import {
  Flex,
  VStack,
  Text,
  StackDivider
} from '@chakra-ui/react'
import { db } from '../service/firebase'
import { collection, onSnapshot } from 'firebase/firestore'
import { useState, useEffect } from 'react'

export default function Stats() {
  const [stats, setStats] = useState({
    show: '0 Show',
    setlist: '0 Setlist',
    unitSong: '0 Unit Song'
  })

  const getStats = () => {
    onSnapshot(collection(db, 'stats'), snapshot => {
      snapshot.docs.map(doc => {
        setStats(stats => ({
          ...stats,
          show: doc.data().show,
          setlist: doc.data().setlist,
          unitSong: doc.data().unitSong
        }))
      })
    })
  }

  useEffect(() => {
    getStats()
  }, [])

  return (
    <Flex alignItems='center' maxW={'10xl'} mt='7vh' bgColor='blue.400' height='35%'>
      <VStack
        spacing={{ base: 4, sm: 6 }}
        divider={<StackDivider borderColor='gray.200' />}
        align='inherit'
        mx='auto'
      >

      <Text fontSize='3xl' opacity='0.9'>
        {stats.show}
      </Text>

      <Text fontSize='3xl' opacity='0.9'>
        {stats.unitSong}
      </Text>

      <Text fontSize='3xl' opacity='0.9'>
        {stats.setlist}
      </Text>

      </VStack>
    </Flex>
  )
}