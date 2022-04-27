import { collection, onSnapshot } from 'firebase/firestore'
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
        onSnapshot(collection(db, 'stats'), snapshot => {
          snapshot.docs.map(doc => {
            data = {
              unitSong: doc.data().unitSong,
              show: doc.data().show,
              setlist: doc.data().setlist
            }
            res.status(200).json(data)
          })
        })
      } catch (err) {
        console.log('Failed get stats to firestore', err)
        res.status(400).end()
      }
    }
    default: {
      res.status(405).end()
    }
  }
}