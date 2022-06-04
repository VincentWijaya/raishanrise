import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../service/firebase'

export default async (req, res) => {
  switch (req.method) {
    case 'GET': {
      try {
        const result = await getDoc(doc(db, 'tiktok', 'tiktok'))
        res.send(Object.keys(result.data()).map((key) => [Number(key), result.data()[key]]))
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