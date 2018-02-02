const express = require('express')

const app = express()
const PORT = 3000

app.post('/', (req, res) => {
  res.send('it works')
})

app.listen(PORT, () => {
  console.log(`Dictionary Definition Server listening on port: ${PORT}`)
})
