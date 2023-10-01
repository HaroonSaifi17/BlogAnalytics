const express = require('express')
const cors = require('cors')

const port = 4040
const app = express()

const statsRouter = require('./routes/blog-stats')
const searchRouter = require('./routes/blog-search')

app.use(cors({ origin: '*', optionsSuccessStatus: 200 }))
app.use('/api/blog-stats',statsRouter)
app.use('/api/blog-search',searchRouter)
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' })
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
