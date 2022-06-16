import {
  Flex,
  Text,
  Box,
  useColorModeValue,
  SimpleGrid,
  Link,
  HStack,
  Spacer,
  Icon
} from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { FaExternalLinkAlt, FaEye } from 'react-icons/fa'
import axios from 'axios'
import "react-responsive-carousel/lib/styles/carousel.min.css"

export default function Tiktok() {
  const [posts, setPost] = useState([])
  const color = useColorModeValue('white', 'gray.800')

  useEffect(() => {
    axios.get('/api/tiktok')
      .then(res => {
        setPost(res.data)
      })
  }, [])

  const videoCard = (post) => {
    return (
      <Box
        bg={color}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
        key={post.views}
        transitionProperty='shadow'
        transitionDuration='1'
        transitionTimingFunction='ease-in-out'
        _hover={{
          shadow: '2xl'
        }}
        width='320px'
      >
        <Box
          as='video'
          controls
          src={post.videoURL+'#t=0.1'}
          objectFit='-moz-initial'
          height='566px'
          preload='metadata'
        />

        <Box p='6'>
          <Flex alignItems='center' gap='2'>
            <Spacer/>
            <HStack gap='2'>
              <Text><Icon as={FaEye} h={3} /> {post.views}</Text>
              <Link href={post.postURL} isExternal>
                <Icon as={FaExternalLinkAlt} h={3} />
              </Link>
            </HStack>
          </Flex>

          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="md"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
            >
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
      >Tiktok Feed</Text>

      <SimpleGrid columns={[1,2,3]} spacing='10' pt='2vh' px='5'>
        {
          posts.length > 0 && posts.map(post => videoCard(post))
        }
      </SimpleGrid>
    </>
  )
}