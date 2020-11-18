const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
const router = require('./routes')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const config = require('./config/key')

const mongoose = require('mongoose')
mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())
app.use(cookieParser())

//app.use('/public/uploads', express.static('public/uploads'))
//app.use('/img',express.static(path.join(__dirname, 'public/uploads')));
//app.use('/api/users', require('./routes/users'))
//app.use('/api/recipes', require('./routes/Recipe'))
app.use(router)
// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  // All the javascript and css files will be read and served from this folder
  app.use(express.static('client/build'))

  // index.html for all page routes    html or routing and naviagtion
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'))
  })
}

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Server Listening on ${port}`)
})
