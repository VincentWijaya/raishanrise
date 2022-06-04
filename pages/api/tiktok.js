import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../service/firebase'

export default async (req, res) => {
  switch (req.method) {
    case 'GET': {
      try {
        const result = await getDoc(doc(db, 'tiktok', 'tiktok'))
        let arr = Object.keys(result.data()).map((k) => result.data()[k])
        res.send(arr)
      } catch (err) {
        console.log('Failed get tiktok to firestore', err)
        res.status(400).end()
      }
      break
    }
    default: {
      res.status(405).end()
    }
  }
}