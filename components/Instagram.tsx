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
import SimpleImageSlider from "react-simple-image-slider"

export default function Instagram() {
  const [posts, setPost] = useState(null)
  const color = useColorModeValue('white', 'gray.800')
  const imageURL = process.env.NEXT_PUBLIC_IS_DEV ? 'https://cors-anywhere.herokuapp.com/' : ''

  useEffect(() => {
    axios.get('/api/instagram')
      .then(res => {
        setPost(res.data)
      })
  }, [])

  const constructImages = (images) => {

    const data = images.map((image) => {
      return {url: imageURL + image.url}
    })

    return data
  }
  
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
        transitionProperty='shadow'
        transitionDuration='1'
        transitionTimingFunction='ease-in-out'
        _hover={{
          shadow: '2xl'
        }}
        >
  
        {
          post.isCarousel ? (
            <SimpleImageSlider
              width={349}
              height={400}
              images={constructImages(post.data)}
              showBullets={true}
              showNavs={true}
              style={{ margin: 'auto', maxWidth:'350' }}
            />
          ) : (
            <Link href={'https://' + post.url} isExternal>
              <Image
                src={imageURL + post.data[0].url}
                alt={post.caption}
                roundedTop="lg"
                crossOrigin='anonymous'
                loading='eager'
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