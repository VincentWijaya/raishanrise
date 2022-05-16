import {
  Box,
  Text,
  Container,
  Stack,
  Heading,
  Input,
  Button,
  InputGroup,
  InputLeftAddon,
  Radio,
  RadioGroup
} from "@chakra-ui/react"
import axios from 'axios'
import { useState } from "react"

import NavBar from './NavBar'
import Footer from './Footer'
import SEO from './SEO'

export default function Layout() {
    const [fullname, setFullname] = useState('')
    const [fullnameInvalid, setFullnameInvalid] = useState(false)
    const handleFullname = (event) => {
      // /^[a-zA-Z0-9_]*$/
      const value = event.target.value
      const regex = /^([a-zA-Z ]){4,}$/
      if (regex.test(value)) {
        setFullnameInvalid(false)
      } else {
        setFullnameInvalid(true)
      }
      setFullname(value)
    }

    const [nickname, setNickname] = useState('')
    const [nicknameInvalid, setNicknameInvalid] = useState(false)
    const handleNickname = (event) => {
      const value = event.target.value
      const regex = /^([a-zA-Z_-]){4,}$/
      if (regex.test(value)) {
        setNicknameInvalid(false)
      } else {
        setNicknameInvalid(true)
      }
      setNickname(value)
    }

    const [twitter, setTwitter] = useState('')
    const [twitterInvalid, setTwitterInvalid] = useState(false)
    const handleTwitter = (event) => {
      const value = event.target.value
      const regex = /^([a-zA-Z0-9_]){4,}$/
      if (regex.test(value)) {
        setTwitterInvalid(false)
      } else {
        setTwitterInvalid(true)
      }
      setTwitter(value)
    }

    const [lineID, setLineID] = useState('')
    const [lineIDInvalid, setLineIDInvalid] = useState(false)
    const handleLineID = (event) => {
      const value = event.target.value
      const regex = /^([a-zA-Z0-9_-]){4,}$/
      if (regex.test(value)) {
        setLineIDInvalid(false)
      } else {
        setLineIDInvalid(true)
      }
      setLineID(value)
    }

    const [regional, setRegional] = useState('')
    const [regionalInvalid, setRegionalInvalid] = useState(false)
    const handleRegional = (event) => {
      const value = event.target.value
      const regex = /^([a-zA-Z0-9_-]){4,}$/
      if (regex.test(value)) {
        setRegionalInvalid(false)
      } else {
        setRegionalInvalid(true)
      }
      setRegional(value)
    }

    const [reason, setReason] = useState('')
    const [reasonInvalid, setReasonInvalid] = useState(false)
    const handleReason = (event) => {
      const value = event.target.value
      const regex = /^([a-zA-Z0-9_-]){4,}$/
      if (regex.test(value)) {
        setReasonInvalid(false)
      } else {
        setReasonInvalid(true)
      }
      setReason(value)
    }

    const [gender, setGender] = useState('')
    const [helping, setHelping] = useState('')
    const [kas, setKas] = useState('')

    return (
        <>
            <Box h='calc(100vh)'>
                <SEO description='Join raisha syifa wardhana fanbase - raishanrise' image='https://raishanrise.my.id//images/raishanrise.jpeg' title='Join - Raishanrise Official Website'/>
                <NavBar />

                <Container as={'form'} maxW={'2xl'} pt='10vh' height={'100%'}>
                  <Stack
                    align={'center'}
                    spacing={{ base: 4, md: 6 }}
                    py={{ base: 20, md: 28 }}
                    pb='30vh'
                    direction={{ base: 'column', sm: 'column' }}
                  >
                    <Heading
                      lineHeight={1.1}
                      fontWeight={600}
                      fontSize={{ base: '2xl', sm: '4xl', lg: '6xl' }}>
                      <Text
                        as={'span'}
                        position={'inherit'}
                        _after={{
                          content: "''",
                          width: 'full',
                          height: '20%',
                          position: 'absolute',
                          bottom: 1,
                          left: 0,
                          zIndex: -1,
                        }}>
                        Join Us
                      </Text>
                    </Heading>
                
                    <Input
                      placeholder="Nama Lengkap"
                      bg={'gray.100'}
                      border={0}
                      color={'gray.500'}
                      _placeholder={{
                        color: 'gray.500',
                      }}
                      value={fullname}
                      isInvalid={fullnameInvalid}
                      onChange={handleFullname}
                      errorBorderColor='crimson'
                      isRequired
                    />
                    <Input
                      placeholder="Nama Panggilan"
                      bg={'gray.100'}
                      border={0}
                      color={'gray.500'}
                      _placeholder={{
                        color: 'gray.500',
                      }}
                      value={nickname}
                      isInvalid={nicknameInvalid}
                      onChange={handleNickname}
                      errorBorderColor='crimson'
                      isRequired
                    />
                    <Input
                      placeholder="Regional"
                      bg={'gray.100'}
                      border={0}
                      color={'gray.500'}
                      _placeholder={{
                        color: 'gray.500',
                      }}
                      value={regional}
                      isInvalid={regionalInvalid}
                      onChange={handleRegional}
                      errorBorderColor='crimson'
                      isRequired
                    />
                    <InputGroup>
                      <InputLeftAddon children='@' />
                      <Input
                        placeholder="Username Twitter"
                        bg={'gray.100'}
                        border={0}
                        color={'gray.500'}
                        _placeholder={{
                          color: 'gray.500',
                        }}
                        value={twitter}
                        isInvalid={twitterInvalid}
                        onChange={handleTwitter}
                        errorBorderColor='crimson'
                        isRequired
                      />
                    </InputGroup>
                    <Input
                      placeholder="ID Line"
                      bg={'gray.100'}
                      border={0}
                      color={'gray.500'}
                      _placeholder={{
                        color: 'gray.500',
                      }}
                      value={lineID}
                      isInvalid={lineIDInvalid}
                      onChange={handleLineID}
                      errorBorderColor='crimson'
                      isRequired
                    />
                    <Input
                      placeholder="Alasan join Raishanrise"
                      bg={'gray.100'}
                      border={0}
                      color={'gray.500'}
                      _placeholder={{
                        color: 'gray.500',
                      }}
                      height={20}
                      value={reason}
                      isInvalid={reasonInvalid}
                      onChange={handleReason}
                      errorBorderColor='crimson'
                      isRequired
                    />

                    <Text>Jenis Kelamin :</Text>
                    <RadioGroup onChange={setGender} value={gender}>
                      <Stack direction='row'>
                        <Radio value='Male'>Male</Radio>
                        <Radio value='Female'>Female</Radio>
                      </Stack>
                    </RadioGroup>
                    <Text>Bersedia untuk membantu project Raishanrise ?</Text>
                    <RadioGroup onChange={setHelping} value={helping}>
                      <Stack direction='row'>
                        <Radio value='Ya'>Ya</Radio>
                        <Radio value='Tidak'>Tidak</Radio>
                      </Stack>
                    </RadioGroup>
                    <Text>Bersedia untung membayar uang kas ?</Text>
                    <RadioGroup onChange={setKas} value={kas}>
                      <Stack direction='row'>
                        <Radio value='Ya'>Ya</Radio>
                        <Radio value='Tidak'>Tidak</Radio>
                      </Stack>
                    </RadioGroup>

                    <Button
                      fontFamily={'heading'}
                      mt={8}
                      w={'full'}
                      bgGradient="linear(to-r, blue.400,purple.400)"
                      color={'white'}
                      _hover={{
                        bgGradient: 'linear(to-r, blue.400,purple.400)',
                        boxShadow: 'xl',
                      }}>
                      Submit
                    </Button>
                  </Stack>
                </Container>

                <Footer />
            </Box>
        </>
    )
}