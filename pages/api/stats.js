import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../service/firebase'

export default async (req, res) => {
  switch (req.method) {
    case 'GET': {
      try {
        let data = {
          show: '0 Show',
          setlist: '0 Setlist',
          unitSong: '0 Unit Song'
        }
        const result = await getDoc(doc(db, 'stats', 'stats'))
        data = {
          unitSong: result.data().unitSong,
          show: result.data().show,
          setlist: result.data().setlist
        }
        res.send(data)
      } catch (err) {
        console.log('Failed get stats to firestore', err)
        res.status(400).end()
      }
      break
    }
    default: {
      res.status(405).end()
    }
  }
}