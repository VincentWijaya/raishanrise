import {
  Box,
  chakra,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import { FaTwitter, FaInstagram, FaTiktok } from 'react-icons/fa'
import { ReactNode } from 'react'

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
      target='_blank'
      rel='noreferrer'
      >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

export default function SmallCentered() {
  return (
    <Box
      borderTopWidth={1}
      borderStyle={'solid'}
      borderColor={useColorModeValue('gray.200', 'gray.700')}
      bg={useColorModeValue('white', 'gray.700')}
      position= 'fixed'
      bottom='0'
      mt='auto'
      width='full'
    >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Text align='center' fontSize='xs'>© 2021-{new Date().getFullYear()} raishanrise. Made with❤️ from  {<Link href='https://twitter.com/RaishanriseOfc' color='purple' isExternal>Raishanrise</Link>}</Text>
        <Stack direction={'row'} spacing={6}>
          <SocialButton label={'Twitter'} href='https://twitter.com/RaishanriseOfc'>
            <FaTwitter />
          </SocialButton>
          <SocialButton label={'Instagram'} href='https://instagram.com/raishanrise.official'>
            <FaInstagram />
          </SocialButton>
          <SocialButton label={'Tiktok'} href='https://tiktok.com/@raishanrise_ofc'>
            <FaTiktok />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  )
}