export default async (req, res) => {
  switch (req.method) {
    case 'PSOT': {
      try {
        console.log(req)
        res.send(200).json({message: 'Success'})
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