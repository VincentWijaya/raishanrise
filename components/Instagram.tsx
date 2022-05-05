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
import { FaHeart, FaCommentAlt, FaExternalLinkAlt } from 'react-icons/fa'
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

export default function Instagram() {
  const [posts, setPost] = useState(null)
  const color = useColorModeValue('white', 'gray.800')
  const imageURL = 'https://test-service-anywhere.herokuapp.com/'

  useEffect(() => {
    axios.get('/api/instagram')
      .then(res => {
        setPost(res.data)
      })
  }, [])
  
  const photoCard = (post) => {
    return (
      posts.length > 0 && 
      
      <Box
        bg={color}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
        key={post.url}
        transitionProperty='shadow'
        transitionDuration='1'
        transitionTimingFunction='ease-in-out'
        _hover={{
          shadow: '2xl'
        }}
      >

      {
        post.isCarousel ? (
          <Carousel showArrows={true} emulateTouch={true} showThumbs={false} swipeable={true} showIndicators={false}>
            {post.data.map((slide, index) => {
              return (
              <Link href={'https://' + post.url} isExternal key={index}>
               <Image
                  src={imageURL + slide.url}
                  roundedTop="lg"
                  crossOrigin='anonymous'
                  loading='lazy'
                  boxSize='400'
                  objectFit='cover'
                />
              </Link>)
            })}
          </Carousel>
        ) : (
          <Link href={'https://' + post.url} isExternal>
            <Image
              src={imageURL + post.data[0].url}
              alt={post.caption}
              roundedTop="lg"
              crossOrigin='anonymous'
              loading='lazy'
              boxSize='400'
              objectFit='cover'
            />
          </Link>
        )
      }

      <Box p="6">
        <Flex alignItems='center' gap='2'>
          <Spacer/>
          <HStack gap='2'>
            <Text><Icon as={FaHeart} h={3}/> {post.like}</Text>
            <Text><Icon as={FaCommentAlt} h={3}/> {post.comment}</Text>
            <Link href={'https://' + post.url} isExternal><Icon as={FaExternalLinkAlt} h={3} /></Link>
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