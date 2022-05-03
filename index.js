const express = require('express')

const app = express()
const PORT = process.env.PORT || 3001

app.get('/', (req, res) => {
  res.json({ msg: 'welcome to the user app 👋' })
})

app.listen(PORT, () => console.log(`listening to the smooth sounds of port ${PORT} in the morning 🌊`))