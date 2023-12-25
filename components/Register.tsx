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
  RadioGroup,
  Tooltip,
  HStack
} from "@chakra-ui/react"
import { FaInfoCircle } from 'react-icons/fa'
import { useState } from "react"

import NavBar from './NavBar'
import Footer from './Footer'
import SEO from './SEO'

import axios from 'axios'
import Swal from "sweetalert2"

export default function Layout() {
    const [fullname, setFullname] = useState('')
    const [fullnameInvalid, setFullnameInvalid] = useState(false)
    const handleFullname = (event) => {
      // /^[a-zA-Z0-9_]*$/
      const value = event.target.value
      const regex = /^[a-zA-Z ]{4,}$/
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
      const regex = /^[a-zA-Z_-]{4,}$/
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
      const regex = /^[a-zA-Z0-9_]{4,}$/
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
      const regex = /^[a-zA-Z0-9_.-]{4,}$/
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
      const regex = /^[a-zA-Z ]{4,}$/
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
      const regex = /^[a-zA-Z ,.]{10,}$/
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

    const [file, setFile] = useState(null)
    const [fileInvalid, setFileInvalid] = useState(false)
    const [url, setUrl] = useState('')
  
    const handleChageFile = (e) => {
      const selectedFile = e.target.files[0]

      if (!selectedFile) {
        Swal.fire(
          'Validation Error',
          'Pastikan file sudah dipilih',
          'warning'
        )
        setFileInvalid(true)
        return
      }
  
      const validImageTypes = ['image/jpeg', 'image/png', 'image/jpg']
      if (!validImageTypes.includes(selectedFile.type)) {
        Swal.fire(
          'Validation Error',
          'Pastikan format file yang dipilih JPEG/JPG/PNG',
          'warning'
        )
        setFileInvalid(true)
        return
      }

      const maxSize = 10 * 1024 * 1024; // 10MB in bytes
      if (selectedFile.size > maxSize) {
        Swal.fire(
          'Validation Error',
          'Pastikan ukuran file tidak melebihi 10MB',
          'warning'
        )
        setFileInvalid(true)
        return
      }

      setFileInvalid(false)
      setFile(selectedFile)
    }

    const readFileAsBase64 = (file: File): Promise<string> => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onload = () => resolve(reader.result as string)
        reader.onerror = (error) => reject(error)
        reader.readAsDataURL(file)
      })
    }

    const handleUpload = async () => {
      if (file) {
        try {
          const response = await fetch('/api/upload', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: `${fullname}-${new Date(Date.now()).toISOString()}`,
              data: await readFileAsBase64(file),
              contentType: file.type
            }),
          });
  
          if (response.ok) {
            const body = await response.json()
            setTimeout(() => {
              setUrl(body.downloadUrl)
            }, 300)
          } else {
            throw new Error(`Failed to upload file: ${response.statusText}`)
          }
        } catch (error) {
          throw new Error(`Error during file upload: ${error.message}`)
        }
      }
    }

    const clearData = () => {
      setFullname('')
      setNickname('')
      setTwitter('')
      setLineID('')
      setRegional('')
      setReason('')
      setGender('')
      setHelping('')
      setKas('')

      const fileInput = document.getElementById('fileInput') as HTMLInputElement
      if (fileInput) {
        fileInput.value = ''
      }
    }

    const [submitting, setSubmitting] = useState(false)
    const handleSubmit = (event) => {
      event.preventDefault()

      setSubmitting(true)
      if (fullnameInvalid || nicknameInvalid || regionalInvalid || twitterInvalid || lineIDInvalid || reasonInvalid || gender == '' || helping == '' || file == null || kas == '') {
        Swal.fire(
          'Validation Error',
          'Pastikan semua input sudah benar',
          'warning'
        )
        setSubmitting(false)
        return
      }

      let registerData = {
        fullname: fullname,
        nickname: nickname,
        twitter: twitter,
        line: lineID,
        regional: regional,
        reason: reason,
        gender: gender,
        helping: helping,
        kas: kas,
        buktiTransfer: ''
      }

      handleUpload()
        .then((resp) => {
          registerData.buktiTransfer = url
          axios.post('/api/register', registerData)
          .then(() => {
            Swal.fire(
              'Registration Success',
              'Data kamu sudah kami terima. Proses registrasi membutuhkan beberapa saat, mohon bersabar ya!',
              'success'
            )
            setSubmitting(false)
            clearData()
          })
          .catch(() =>{
            Swal.fire(
              'Failed to Register',
              `Oops, saat ini server kami sedang bermasalah. Jangan khawatir, kamu masih bisa melakukan pendaftaran melalui <a href="https://docs.google.com/forms/d/e/1FAIpQLScMcUI4n_IwsTcawbVSVl4O7luJ4C-QUncmFlnaohYuGMFE5A/viewform" target="_blank">link ini</a>`,
              'error'
            )
            setSubmitting(false)
            clearData()
          })
        })
        .catch((err) => {
          console.log(err)
          Swal.fire(
            'Failed to Upload file',
            `Oops, saat ini server kami sedang bermasalah. Jangan khawatir, kamu masih bisa melakukan pendaftaran melalui <a href="https://docs.google.com/forms/d/e/1FAIpQLScMcUI4n_IwsTcawbVSVl4O7luJ4C-QUncmFlnaohYuGMFE5A/viewform" target="_blank">link ini</a>`,
            'error'
          )
          setSubmitting(false)
          clearData()
        })
    }

    const JOIN_FORM_WORDING = process.env.NEXT_PUBLIC_JOIN_FORM_WORDING

    return (
        <>
            <Box h='calc(100vh)'>
                <SEO description='Join raisha syifa wardhana fanbase - raishanrise' image='https://raishanrise.my.id//images/raishanrise.jpeg' title='Join - Raishanrise Official Website'/>
                <NavBar />

                {
                  JOIN_FORM_WORDING ? (
                    <Container as={'form'} maxW={'2xl'} pt='10vh' height={'100%'}>
                      <Stack
                        align={'center'}
                        spacing={{ base: 4, md: 6 }}
                        py={{ base: 20, md: 28 }}
                        pb='30vh'
                        direction={{ base: 'column', sm: 'column' }}
                      >
                        <Text textAlign="center">
                          {JOIN_FORM_WORDING}
                        </Text>
                      </Stack>
                    </Container>
                  ) : (
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
                          onClick={handleFullname}
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
                          onClick={handleNickname}
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
                          onClick={handleRegional}
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
                            onClick={handleTwitter}
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
                          onClick={handleLineID}
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
                          onClick={handleReason}
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
                        <Tooltip label="Uang kas digunakan untuk membantu Raishanrise dalam menjalankan setiap project yang berkaitan dengan Raisha. Mohon bantuannya ya!!">
                          <HStack spacing="5px">
                            <Text>Bersedia untung membayar uang kas sebesar Rp 20.000 / bulan ?</Text>
                            <FaInfoCircle />
                          </HStack>
                        </Tooltip>
                        <RadioGroup onChange={setKas} value={kas}>
                          <Stack direction='row'>
                            <Radio value='Ya'>Ya</Radio>
                          </Stack>
                        </RadioGroup>
                        <Tooltip label='Silahkan melakukan transfer ke rekening Bank Central Asia 7745565085 atas nama Isa Fadliatunnisa.'>
                          <HStack spacing="5px">
                            <Text>Upload bukti transfer : </Text>
                            <FaInfoCircle />
                          </HStack>
                        </Tooltip>
                        <Input
                          type="file"
                          id="fileInput"
                          onChange={handleChageFile}
                          isInvalid={fileInvalid}
                          errorBorderColor='crimson'
                        />

                        <Button
                          fontFamily={'heading'}
                          mt={8}
                          w={'full'}
                          bgGradient="linear(to-r, blue.400,blue.500)"
                          color={'white'}
                          _hover={{
                            bgGradient: 'linear(to-r, blue.400,blue.500)',
                            boxShadow: 'xl',
                          }}
                          disabled={submitting}
                          onClick={handleSubmit}
                          isLoading={submitting}
                          loadingText='Submitting'
                          colorScheme='blue'
                          variant='outline'
                        >
                          Submit
                        </Button>
                      </Stack>
                    </Container>
                  )
                }

                <Footer />
            </Box>
        </>
    )
}