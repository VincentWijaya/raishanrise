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
  HStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  VStack
} from "@chakra-ui/react"
import { FaInfoCircle, FaQrcode } from 'react-icons/fa'
import { useState, useEffect } from "react"
import { useEdgeStore } from '../lib/edgestore'
import QRCode from 'react-qr-code'

import NavBar from './NavBar'
import Footer from './Footer'
import SEO from './SEO'

import axios from 'axios'
import Swal from "sweetalert2"

export default function Layout() {
    const { edgestore } = useEdgeStore()

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

    const handleUpload = async () => {
      if (file) {
        try {
          const res = await edgestore.publicFiles.upload({
            file,
          })

          setUrl(res.url)
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
    useEffect(() => {
      if (url) {
        const registerData = {
          fullname: fullname,
          nickname: nickname,
          twitter: twitter,
          line: lineID,
          regional: regional,
          reason: reason,
          gender: gender,
          helping: helping,
          kas: kas,
          buktiTransfer: url,
        }
  
        axios
          .post('/api/register', registerData)
          .then(() => {
            Swal.fire(
              'Registration Success',
              'Data kamu sudah kami terima. Proses registrasi membutuhkan beberapa saat, mohon bersabar ya!',
              'success'
            )
            setSubmitting(false)
            clearData();
          })
          .catch(() => {
            Swal.fire(
              'Failed to Register',
              `Oops, saat ini server kami sedang bermasalah. Jangan khawatir, kamu masih bisa melakukan pendaftaran melalui <a href="https://docs.google.com/forms/d/e/1FAIpQLScMcUI4n_IwsTcawbVSVl4O7luJ4C-QUncmFlnaohYuGMFE5A/viewform" target="_blank">link ini</a>`,
              'error'
            )
            setSubmitting(false)
            clearData()
          })
      }
    },  [url])
    
    const handleSubmit = async (event) => {
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

      try {
        await handleUpload()
      } catch (error) {
        console.log(error)
        Swal.fire(
          'Failed to Upload file',
          `Oops, saat ini server kami sedang bermasalah. Jangan khawatir, kamu masih bisa melakukan pendaftaran melalui <a href="https://docs.google.com/forms/d/e/1FAIpQLScMcUI4n_IwsTcawbVSVl4O7luJ4C-QUncmFlnaohYuGMFE5A/viewform" target="_blank">link ini</a>`,
          'error'
        )
        setSubmitting(false)
        clearData()
      }
    }

    const JOIN_FORM_WORDING = process.env.NEXT_PUBLIC_JOIN_FORM_WORDING
    const JOIN_AMOUNT = process.env.NEXT_PUBLIC_JOIN_AMOUNT || '25.000'
    const KAS_WORDING = process.env.NEXT_PUBLIC_KAS_WORDING || `Bersedia untuk membayar uang kas sebesar Rp ${JOIN_AMOUNT} / bulan ?`
    const BANK_LABEL_TOOLTIP = process.env.NEXT_PUBLIC_BANK_DETAIL || 'Silahkan melakukan transfer ke rekening Bank Central Asia 5250362970 a/n Arif Laksono. Atau bisa juga meggunakan QRIS dibawah ini ya!'
    const [showTransferTooltip, setShowTransferTooltip] = useState(false)
    const [showAckTransferTooltip, setShowAckTransferTooltip] = useState(false)

    const { isOpen, onOpen, onClose } = useDisclosure()
    const QRIS_STRING = '00020101021126610014COM.GO-JEK.WWW01189360091430988229730210G0988229730303UMI51440014ID.CO.QRIS.WWW0215ID10254363642080303UMI5204721053033605802ID5920Raishanrise, Laundry6013JAKARTA TIMUR61051363062070703A016304FA7A'

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
                        <Tooltip isOpen={showAckTransferTooltip} label="Uang kas digunakan untuk membantu Raishanrise dalam menjalankan setiap project yang berkaitan dengan Raisha. Mohon bantuannya ya!!">
                          <HStack onMouseEnter={() => setShowAckTransferTooltip(true)} onMouseLeave={() => setShowAckTransferTooltip(false)} spacing="5px">
                            <Text>{KAS_WORDING}</Text>
                            <FaInfoCircle onClick={() => setShowAckTransferTooltip(!showAckTransferTooltip)} />
                          </HStack>
                        </Tooltip>
                        <RadioGroup onChange={setKas} value={kas}>
                          <Stack direction='row'>
                            <Radio value='Ya'>Ya</Radio>
                          </Stack>
                        </RadioGroup>

                        <Tooltip isOpen={showTransferTooltip} label={BANK_LABEL_TOOLTIP}>
                          <HStack onMouseEnter={() => setShowTransferTooltip(true)} onMouseLeave={() => setShowTransferTooltip(false)} spacing="5px">
                            <Text>Upload bukti transfer : </Text>
                            <FaInfoCircle onClick={() => setShowTransferTooltip(!showTransferTooltip)} />
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
                          leftIcon={<FaQrcode />}
                          colorScheme="green"
                          variant="outline"
                          onClick={onOpen}
                          w={'full'}
                          mt={4}
                        >
                          Tampilkan QRIS
                        </Button>

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

            <Modal isOpen={isOpen} onClose={onClose} size="lg">
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>QRIS - Raishanrise</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <VStack spacing={4}>
                    <Text textAlign="center" fontSize="sm" color="gray.600">
                      Scan QRIS ini untuk melakukan pembayaran melalui ewallet atau mobile banking
                    </Text>
                    <Box 
                      p={4} 
                      bg="white" 
                      borderRadius="md" 
                      boxShadow="md"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <QRCode
                        size={256}
                        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                        value={QRIS_STRING}
                        viewBox={`0 0 256 256`}
                      />
                    </Box>
                    <Text textAlign="center" fontSize="xs" color="gray.500">
                      Raishanrise - Jakarta Timur
                    </Text>
                  </VStack>
                </ModalBody>
                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onClose}>
                    Tutup
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
        </>
    )
}