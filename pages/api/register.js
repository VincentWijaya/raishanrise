import axios from 'axios'
import querystring from 'querystring'
import { db } from '../../service/firebase'
import { collection, addDoc } from 'firebase/firestore'

export default async (req, res) => {
  switch (req.method) {
    case 'POST': {
      try {        
        const {
          fullname,
          nickname,
          twitter,
          line,
          regional,
          reason,
          gender,
          helping,
          kas,
          buktiTransfer
        } = req.body
        const telegramData = {
          chat_id: '-1001611289340',
          text: `============================\nAda member baru nih!!!!!\n\nNama: ${fullname}\nPanggilan: ${nickname}\nJenis Kelamin: ${gender}\nTwitter: https://twitter.com/${twitter}\nLine:  http://line.me/ti/p/~${line}\nRegion: ${regional}\nAlasan join: ${reason}\nMau bantu project? ${helping}\nMau bayar uang kas? ${kas}\nBukti transfer: ${buktiTransfer}`
        }

        addDoc(collection(db, 'register-list'), {
          nama: fullname,
          nickname: nickname,
          gender: gender,
          twitter: `https://twitter.com/${twitter}`,
          line: `http://line.me/ti/p/~${line}`,
          region: regional,
          reason: reason,
          help: helping,
          kas: kas,
          buktiTransfer: buktiTransfer
        })

        axios.post(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, querystring.stringify(telegramData))
          .then(resp => {
            console.log('success send message')
            res.send({message: 'Success'})
          })
          .catch(err => {
            console.log('failed send message', err.message)
          })
      } catch (err) {
        console.log('Failed to send message to telegram', err)
        res.status(400).end()
      }
      break
    }
    default: {
      res.status(405).end()
    }
  }
}