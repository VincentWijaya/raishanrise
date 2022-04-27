import {
  Flex,
  Text,
  Box,
  Image,
  useColorModeValue
} from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const photoCard = (post) => {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.800')}
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
        sizes='400'
      />

      <Box p="6">
        <Flex mt="1" justifyContent="space-between" alignContent="center">
          <Box
            fontSize="2xl"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated>
            {post.caption}
          </Box>
        </Flex>

        <Flex justifyContent="space-between" alignContent="center">
          <Text>{post.username}</Text>
        </Flex>
      </Box>
    </Box>
  )
}

export default function Instagram() {
  const [posts, setPost] = useState([])

  useEffect(() => {
    axios.get('/api/instagram')
      .then(res => {
        setPost(res.data)
      })
  }, [])

  return (
    <>
      <Text
        fontSize={{ base: 'xl', sm: '2xl', lg: '4xl' }}
      >Instagram Feed</Text>

      {/* <Flex p={50} w="full" alignItems="center" justifyContent="center">
        {
          posts.map(post => photoCard(post))
        }
      </Flex> */}
    </>
  )
}