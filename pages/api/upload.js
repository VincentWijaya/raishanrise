import { ref, uploadString, getDownloadURL, getStorage } from 'firebase/storage'
import { getApp } from 'firebase/app'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const firebaseApp = getApp()
      const { name, data, contentType } = req.body

      const storageRef = getStorage(firebaseApp, `gs://${process.env.FIREBASE_STORAGE_BUCKET}`)
      const fileRef = ref(storageRef, `/bukti-transfer/${name}`)

      await uploadString(fileRef, data.split(',')[1], 'base64', { contentType: contentType })

      const downloadUrl = await getDownloadURL(fileRef)

      res.status(200).json({ downloadUrl })
    } catch (error) {
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