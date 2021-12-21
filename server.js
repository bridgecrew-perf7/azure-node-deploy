const express = require('express')
const PORT = process.env.PORT || 4000

const app = express()

app.get('/', (req, res) => {
  res.send('hello from my app')
})

app.get('/about', (req, res) => {
  res.send('This string is all about my app')
})

app.get('/contact', (req, res) => {
  res.send('You can reach us at 555-555-5555')
})

app.listen(PORT, () => {
  console.log('Server is running on port', PORT)
})
