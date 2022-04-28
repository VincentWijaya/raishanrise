import {
  Flex,
  Text,
  Box,
  Image,
  useColorModeValue,
  SimpleGrid,
  Link,
  HStack,
  Spacer,
  Icon
} from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { FaHeart, FaCommentAlt } from 'react-icons/fa'

export default function Instagram() {
  const [posts, setPost] = useState(null)
  const color = useColorModeValue('white', 'gray.800')

  useEffect(() => {
    axios.get('/api/instagram')
      .then(res => {
        setPost(res.data)
      })
  }, [])

  const photoCard = (post) => {
    return (
      <Box
        bg={color}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
        key={post.url}
        marginLeft='5vh'
        >
  
        <Image
          src={'https://cors-anywhere.herokuapp.com/' + post.data[0].url}
          alt={post.caption}
          roundedTop="lg"
          crossOrigin='anonymous'
          loading='eager'
          boxSize='400'
          objectFit='cover'
        />
  
        <Box p="6">
          <Flex alignItems='center' gap='2'>
            <Spacer/>
            <HStack gap='2'>
              <Text><Icon as={FaHeart} h={3}/> {post.like}</Text>
              <Text><Icon as={FaCommentAlt} h={3}/> {post.comment}</Text>
            </HStack>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
            <Link href={'https://instagram.com/' + post.username} isExternal><Text fontWeight='light'>{post.username}</Text></Link>
          </Flex>
  
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="md"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated>
              {post.caption}
            </Box>
          </Flex>
        </Box>
      </Box>
    )
  }

  return (
    <>
      <Text
        fontSize={{ base: 'xl', sm: '2xl', lg: '4xl' }}
      >Instagram Feed</Text>

      <SimpleGrid columns={[1,2,3]} spacing='10' pt='2vh'>
        {
          posts && posts.map(post => photoCard(post))
        }
      </SimpleGrid>
    </>
  )
}