import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { storage } from '../../service/firebase'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { name, data } = req.body

      const storageRef = ref(storage, `bukti-transfer/${name}`)

      await uploadBytes(storageRef, Buffer.from(data, 'base64'))

      const downloadUrl = await getDownloadURL(storageRef)

      res.status(200).json({ downloadUrl })
    } catch (error) {
      console.log('===========> ', error)
      console.error('Error uploading the file:', error.message)
      res.status(500).json({ error: 'Internal Server Error' })
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' })
  }
}

export const config = {
  api: {
      bodyParser: {
          sizeLimit: '10mb'
      }
  }
}