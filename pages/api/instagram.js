import { collection, onSnapshot } from 'firebase/firestore'
import { db } from '../../service/firebase'

export default async (req, res) => {
  switch (req.method) {
    case 'GET': {
      try {
        onSnapshot(collection(db, 'instagram'), snapshot => {
          snapshot.docs.map(doc => {
            const obj = doc.data()
            let arr = Object.keys(obj).map((k) => obj[k])
            res.send(arr)
          })
        })
      } catch (err) {
        console.log('Failed get instagram to firestore', err)
        res.status(400).end()
      }
      break
    }
    default: {
      res.status(405).end()
    }
  }
}