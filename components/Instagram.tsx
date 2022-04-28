import {
  Flex,
  Text,
  Box,
  Image,
  useColorModeValue,
  SimpleGrid
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
  // const data = [{"comment":227,"like":9233,"isCarousel":true,"username":"jkt48.raisha.s","url":"instagram.com/p/Cb4wmSfhVOp","data":[{"estimated_scans_sizes":[20849,41698,62547,83396,104245,116650,148441,168711,187642],"width":1080,"height":1350,"scans_profile":"e35","url":"https://scontent-sin6-1.cdninstagram.com/v/t51.2885-15/277770671_157142000087567_8127773459983242414_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent-sin6-1.cdninstagram.com&_nc_cat=111&_nc_ohc=pUY7AuRgIEEAX8-WJ5Y&edm=ABmJApABAAAA&ccb=7-4&ig_cache_key=MjgwODIwODEwMDAyNzY4MjIwOQ%3D%3D.2-ccb7-4&oh=00_AT8J0HMkFPb4vGhXn_JLodUXPKrnzraqGNiiH2msnEhM-g&oe=626FC7D5&_nc_sid=6136e7"},{"height":1350,"estimated_scans_sizes":[21126,42253,63380,84507,105634,118204,150419,170959,190142],"width":1080,"scans_profile":"e35","url":"https://scontent-sin6-2.cdninstagram.com/v/t51.2885-15/277851768_951668878878413_9014073760051362764_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent-sin6-2.cdninstagram.com&_nc_cat=105&_nc_ohc=uobIQe8ZOMEAX_7aT27&edm=ABmJApABAAAA&ccb=7-4&ig_cache_key=MjgwODIwODEwMDM0NjQ5NDYwOA%3D%3D.2-ccb7-4&oh=00_AT_H9ZLsbgxpEA51IMdVBlIh47-EJRqRGPGbzJ3_Z3foPw&oe=6270AA9D&_nc_sid=6136e7"}],"caption":""},{"comment":227,"like":9233,"isCarousel":true,"username":"jkt48.raisha.s","url":"instagram.com/p/Cb4wmSfhVOp","data":[{"estimated_scans_sizes":[20849,41698,62547,83396,104245,116650,148441,168711,187642],"width":1080,"height":1350,"scans_profile":"e35","url":"https://scontent-sin6-1.cdninstagram.com/v/t51.2885-15/277770671_157142000087567_8127773459983242414_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent-sin6-1.cdninstagram.com&_nc_cat=111&_nc_ohc=pUY7AuRgIEEAX8-WJ5Y&edm=ABmJApABAAAA&ccb=7-4&ig_cache_key=MjgwODIwODEwMDAyNzY4MjIwOQ%3D%3D.2-ccb7-4&oh=00_AT8J0HMkFPb4vGhXn_JLodUXPKrnzraqGNiiH2msnEhM-g&oe=626FC7D5&_nc_sid=6136e7"},{"height":1350,"estimated_scans_sizes":[21126,42253,63380,84507,105634,118204,150419,170959,190142],"width":1080,"scans_profile":"e35","url":"https://scontent-sin6-2.cdninstagram.com/v/t51.2885-15/277851768_951668878878413_9014073760051362764_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent-sin6-2.cdninstagram.com&_nc_cat=105&_nc_ohc=uobIQe8ZOMEAX_7aT27&edm=ABmJApABAAAA&ccb=7-4&ig_cache_key=MjgwODIwODEwMDM0NjQ5NDYwOA%3D%3D.2-ccb7-4&oh=00_AT_H9ZLsbgxpEA51IMdVBlIh47-EJRqRGPGbzJ3_Z3foPw&oe=6270AA9D&_nc_sid=6136e7"}],"caption":""},{"comment":227,"like":9233,"isCarousel":true,"username":"jkt48.raisha.s","url":"instagram.com/p/Cb4wmSfhVOp","data":[{"estimated_scans_sizes":[20849,41698,62547,83396,104245,116650,148441,168711,187642],"width":1080,"height":1350,"scans_profile":"e35","url":"https://scontent-sin6-1.cdninstagram.com/v/t51.2885-15/277770671_157142000087567_8127773459983242414_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent-sin6-1.cdninstagram.com&_nc_cat=111&_nc_ohc=pUY7AuRgIEEAX8-WJ5Y&edm=ABmJApABAAAA&ccb=7-4&ig_cache_key=MjgwODIwODEwMDAyNzY4MjIwOQ%3D%3D.2-ccb7-4&oh=00_AT8J0HMkFPb4vGhXn_JLodUXPKrnzraqGNiiH2msnEhM-g&oe=626FC7D5&_nc_sid=6136e7"},{"height":1350,"estimated_scans_sizes":[21126,42253,63380,84507,105634,118204,150419,170959,190142],"width":1080,"scans_profile":"e35","url":"https://scontent-sin6-2.cdninstagram.com/v/t51.2885-15/277851768_951668878878413_9014073760051362764_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent-sin6-2.cdninstagram.com&_nc_cat=105&_nc_ohc=uobIQe8ZOMEAX_7aT27&edm=ABmJApABAAAA&ccb=7-4&ig_cache_key=MjgwODIwODEwMDM0NjQ5NDYwOA%3D%3D.2-ccb7-4&oh=00_AT_H9ZLsbgxpEA51IMdVBlIh47-EJRqRGPGbzJ3_Z3foPw&oe=6270AA9D&_nc_sid=6136e7"}],"caption":""},{"comment":227,"like":9233,"isCarousel":true,"username":"jkt48.raisha.s","url":"instagram.com/p/Cb4wmSfhVOp","data":[{"estimated_scans_sizes":[20849,41698,62547,83396,104245,116650,148441,168711,187642],"width":1080,"height":1350,"scans_profile":"e35","url":"https://scontent-sin6-1.cdninstagram.com/v/t51.2885-15/277770671_157142000087567_8127773459983242414_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent-sin6-1.cdninstagram.com&_nc_cat=111&_nc_ohc=pUY7AuRgIEEAX8-WJ5Y&edm=ABmJApABAAAA&ccb=7-4&ig_cache_key=MjgwODIwODEwMDAyNzY4MjIwOQ%3D%3D.2-ccb7-4&oh=00_AT8J0HMkFPb4vGhXn_JLodUXPKrnzraqGNiiH2msnEhM-g&oe=626FC7D5&_nc_sid=6136e7"},{"height":1350,"estimated_scans_sizes":[21126,42253,63380,84507,105634,118204,150419,170959,190142],"width":1080,"scans_profile":"e35","url":"https://scontent-sin6-2.cdninstagram.com/v/t51.2885-15/277851768_951668878878413_9014073760051362764_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent-sin6-2.cdninstagram.com&_nc_cat=105&_nc_ohc=uobIQe8ZOMEAX_7aT27&edm=ABmJApABAAAA&ccb=7-4&ig_cache_key=MjgwODIwODEwMDM0NjQ5NDYwOA%3D%3D.2-ccb7-4&oh=00_AT_H9ZLsbgxpEA51IMdVBlIh47-EJRqRGPGbzJ3_Z3foPw&oe=6270AA9D&_nc_sid=6136e7"}],"caption":""}, {"comment":227,"like":9233,"isCarousel":true,"username":"jkt48.raisha.s","url":"instagram.com/p/Cb4wmSfhVOp","data":[{"estimated_scans_sizes":[20849,41698,62547,83396,104245,116650,148441,168711,187642],"width":1080,"height":1350,"scans_profile":"e35","url":"https://scontent-sin6-1.cdninstagram.com/v/t51.2885-15/277770671_157142000087567_8127773459983242414_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent-sin6-1.cdninstagram.com&_nc_cat=111&_nc_ohc=pUY7AuRgIEEAX8-WJ5Y&edm=ABmJApABAAAA&ccb=7-4&ig_cache_key=MjgwODIwODEwMDAyNzY4MjIwOQ%3D%3D.2-ccb7-4&oh=00_AT8J0HMkFPb4vGhXn_JLodUXPKrnzraqGNiiH2msnEhM-g&oe=626FC7D5&_nc_sid=6136e7"},{"height":1350,"estimated_scans_sizes":[21126,42253,63380,84507,105634,118204,150419,170959,190142],"width":1080,"scans_profile":"e35","url":"https://scontent-sin6-2.cdninstagram.com/v/t51.2885-15/277851768_951668878878413_9014073760051362764_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent-sin6-2.cdninstagram.com&_nc_cat=105&_nc_ohc=uobIQe8ZOMEAX_7aT27&edm=ABmJApABAAAA&ccb=7-4&ig_cache_key=MjgwODIwODEwMDM0NjQ5NDYwOA%3D%3D.2-ccb7-4&oh=00_AT_H9ZLsbgxpEA51IMdVBlIh47-EJRqRGPGbzJ3_Z3foPw&oe=6270AA9D&_nc_sid=6136e7"}],"caption":""},{"comment":227,"like":9233,"isCarousel":true,"username":"jkt48.raisha.s","url":"instagram.com/p/Cb4wmSfhVOp","data":[{"estimated_scans_sizes":[20849,41698,62547,83396,104245,116650,148441,168711,187642],"width":1080,"height":1350,"scans_profile":"e35","url":"https://scontent-sin6-1.cdninstagram.com/v/t51.2885-15/277770671_157142000087567_8127773459983242414_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent-sin6-1.cdninstagram.com&_nc_cat=111&_nc_ohc=pUY7AuRgIEEAX8-WJ5Y&edm=ABmJApABAAAA&ccb=7-4&ig_cache_key=MjgwODIwODEwMDAyNzY4MjIwOQ%3D%3D.2-ccb7-4&oh=00_AT8J0HMkFPb4vGhXn_JLodUXPKrnzraqGNiiH2msnEhM-g&oe=626FC7D5&_nc_sid=6136e7"},{"height":1350,"estimated_scans_sizes":[21126,42253,63380,84507,105634,118204,150419,170959,190142],"width":1080,"scans_profile":"e35","url":"https://scontent-sin6-2.cdninstagram.com/v/t51.2885-15/277851768_951668878878413_9014073760051362764_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent-sin6-2.cdninstagram.com&_nc_cat=105&_nc_ohc=uobIQe8ZOMEAX_7aT27&edm=ABmJApABAAAA&ccb=7-4&ig_cache_key=MjgwODIwODEwMDM0NjQ5NDYwOA%3D%3D.2-ccb7-4&oh=00_AT_H9ZLsbgxpEA51IMdVBlIh47-EJRqRGPGbzJ3_Z3foPw&oe=6270AA9D&_nc_sid=6136e7"}],"caption":""}, {"comment":227,"like":9233,"isCarousel":true,"username":"jkt48.raisha.s","url":"instagram.com/p/Cb4wmSfhVOp","data":[{"estimated_scans_sizes":[20849,41698,62547,83396,104245,116650,148441,168711,187642],"width":1080,"height":1350,"scans_profile":"e35","url":"https://scontent-sin6-1.cdninstagram.com/v/t51.2885-15/277770671_157142000087567_8127773459983242414_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent-sin6-1.cdninstagram.com&_nc_cat=111&_nc_ohc=pUY7AuRgIEEAX8-WJ5Y&edm=ABmJApABAAAA&ccb=7-4&ig_cache_key=MjgwODIwODEwMDAyNzY4MjIwOQ%3D%3D.2-ccb7-4&oh=00_AT8J0HMkFPb4vGhXn_JLodUXPKrnzraqGNiiH2msnEhM-g&oe=626FC7D5&_nc_sid=6136e7"},{"height":1350,"estimated_scans_sizes":[21126,42253,63380,84507,105634,118204,150419,170959,190142],"width":1080,"scans_profile":"e35","url":"https://scontent-sin6-2.cdninstagram.com/v/t51.2885-15/277851768_951668878878413_9014073760051362764_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent-sin6-2.cdninstagram.com&_nc_cat=105&_nc_ohc=uobIQe8ZOMEAX_7aT27&edm=ABmJApABAAAA&ccb=7-4&ig_cache_key=MjgwODIwODEwMDM0NjQ5NDYwOA%3D%3D.2-ccb7-4&oh=00_AT_H9ZLsbgxpEA51IMdVBlIh47-EJRqRGPGbzJ3_Z3foPw&oe=6270AA9D&_nc_sid=6136e7"}],"caption":""},{"comment":227,"like":9233,"isCarousel":true,"username":"jkt48.raisha.s","url":"instagram.com/p/Cb4wmSfhVOp","data":[{"estimated_scans_sizes":[20849,41698,62547,83396,104245,116650,148441,168711,187642],"width":1080,"height":1350,"scans_profile":"e35","url":"https://scontent-sin6-1.cdninstagram.com/v/t51.2885-15/277770671_157142000087567_8127773459983242414_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent-sin6-1.cdninstagram.com&_nc_cat=111&_nc_ohc=pUY7AuRgIEEAX8-WJ5Y&edm=ABmJApABAAAA&ccb=7-4&ig_cache_key=MjgwODIwODEwMDAyNzY4MjIwOQ%3D%3D.2-ccb7-4&oh=00_AT8J0HMkFPb4vGhXn_JLodUXPKrnzraqGNiiH2msnEhM-g&oe=626FC7D5&_nc_sid=6136e7"},{"height":1350,"estimated_scans_sizes":[21126,42253,63380,84507,105634,118204,150419,170959,190142],"width":1080,"scans_profile":"e35","url":"https://scontent-sin6-2.cdninstagram.com/v/t51.2885-15/277851768_951668878878413_9014073760051362764_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent-sin6-2.cdninstagram.com&_nc_cat=105&_nc_ohc=uobIQe8ZOMEAX_7aT27&edm=ABmJApABAAAA&ccb=7-4&ig_cache_key=MjgwODIwODEwMDM0NjQ5NDYwOA%3D%3D.2-ccb7-4&oh=00_AT_H9ZLsbgxpEA51IMdVBlIh47-EJRqRGPGbzJ3_Z3foPw&oe=6270AA9D&_nc_sid=6136e7"}],"caption":""}, {"comment":227,"like":9233,"isCarousel":true,"username":"jkt48.raisha.s","url":"instagram.com/p/Cb4wmSfhVOp","data":[{"estimated_scans_sizes":[20849,41698,62547,83396,104245,116650,148441,168711,187642],"width":1080,"height":1350,"scans_profile":"e35","url":"https://scontent-sin6-1.cdninstagram.com/v/t51.2885-15/277770671_157142000087567_8127773459983242414_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent-sin6-1.cdninstagram.com&_nc_cat=111&_nc_ohc=pUY7AuRgIEEAX8-WJ5Y&edm=ABmJApABAAAA&ccb=7-4&ig_cache_key=MjgwODIwODEwMDAyNzY4MjIwOQ%3D%3D.2-ccb7-4&oh=00_AT8J0HMkFPb4vGhXn_JLodUXPKrnzraqGNiiH2msnEhM-g&oe=626FC7D5&_nc_sid=6136e7"},{"height":1350,"estimated_scans_sizes":[21126,42253,63380,84507,105634,118204,150419,170959,190142],"width":1080,"scans_profile":"e35","url":"https://scontent-sin6-2.cdninstagram.com/v/t51.2885-15/277851768_951668878878413_9014073760051362764_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent-sin6-2.cdninstagram.com&_nc_cat=105&_nc_ohc=uobIQe8ZOMEAX_7aT27&edm=ABmJApABAAAA&ccb=7-4&ig_cache_key=MjgwODIwODEwMDM0NjQ5NDYwOA%3D%3D.2-ccb7-4&oh=00_AT_H9ZLsbgxpEA51IMdVBlIh47-EJRqRGPGbzJ3_Z3foPw&oe=6270AA9D&_nc_sid=6136e7"}],"caption":""},{"comment":227,"like":9233,"isCarousel":true,"username":"jkt48.raisha.s","url":"instagram.com/p/Cb4wmSfhVOp","data":[{"estimated_scans_sizes":[20849,41698,62547,83396,104245,116650,148441,168711,187642],"width":1080,"height":1350,"scans_profile":"e35","url":"https://scontent-sin6-1.cdninstagram.com/v/t51.2885-15/277770671_157142000087567_8127773459983242414_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent-sin6-1.cdninstagram.com&_nc_cat=111&_nc_ohc=pUY7AuRgIEEAX8-WJ5Y&edm=ABmJApABAAAA&ccb=7-4&ig_cache_key=MjgwODIwODEwMDAyNzY4MjIwOQ%3D%3D.2-ccb7-4&oh=00_AT8J0HMkFPb4vGhXn_JLodUXPKrnzraqGNiiH2msnEhM-g&oe=626FC7D5&_nc_sid=6136e7"},{"height":1350,"estimated_scans_sizes":[21126,42253,63380,84507,105634,118204,150419,170959,190142],"width":1080,"scans_profile":"e35","url":"https://scontent-sin6-2.cdninstagram.com/v/t51.2885-15/277851768_951668878878413_9014073760051362764_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent-sin6-2.cdninstagram.com&_nc_cat=105&_nc_ohc=uobIQe8ZOMEAX_7aT27&edm=ABmJApABAAAA&ccb=7-4&ig_cache_key=MjgwODIwODEwMDM0NjQ5NDYwOA%3D%3D.2-ccb7-4&oh=00_AT_H9ZLsbgxpEA51IMdVBlIh47-EJRqRGPGbzJ3_Z3foPw&oe=6270AA9D&_nc_sid=6136e7"}],"caption":""}]
  const [posts, setPost] = useState(null)
  const color = useColorModeValue('white', 'gray.800')

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

      <SimpleGrid columns={[1,2,3]} spacing='10' pt='2vh'>
        {
          posts && posts.map(post => (
            <Box
              bg={color}
              maxW="sm"
              borderWidth="1px"
              rounded="lg"
              shadow="lg"
              position="relative"
              key={post.url}
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
          ))
        }
      </SimpleGrid>
    </>
  )
}