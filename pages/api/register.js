import axios from 'axios'
import querystring from 'querystring'

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
          kas
        } = req.body
        const telegramData = {
          chat_id: '-1001611289340',
          text: `============================\nAda member baru nih!!!!!\n\nNama: ${fullname}\nPanggilan: ${nickname}\nJenis Kelamin: ${gender}\nTwitter: https://twitter.com/${twitter}\nLine:  http://line.me/ti/p/~${line}\nRegion: ${regional}\nAlasan join: ${reason}\nMau bantu project? ${helping}\nMau bayar uang kas? ${kas}`
        }
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