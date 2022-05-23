require("dotenv").config()

const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
const { errorHandler, errorMiddleWare } = require('./ErrorHandlers')
const { sendContactForm } = require('./Controllers')
const uploadForUserPhoto = require('./utils/multerFuncs')


const app = express()
app.use( cors() )
app.use( helmet() )
app.use( morgan('common') )
app.use( express.json() )
app.use(express.static("static"));

app.get('/', (req,res) => {
  res.send('Deveb')
})

app.post('/api/send', uploadForUserPhoto.array("attachs",20), sendContactForm)

app.use(errorMiddleWare)
app.use(errorHandler)

const port = process.env.PORT || 3001
console.log(process.env.PORT)
app.listen( port, () => {
  console.log(`Listening on port ${port}`)
})