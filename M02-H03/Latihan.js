const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('root')
})
app.get('/about', (req, res) => {
  res.send('about')
})
app.get('/random.text', (req, res) => {
  res.send('random.text')
})
app.get('/ab?cd', (req, res) => {
  res.send('ab?cd')
})
app.get('/ab+cd', (req, res) => {
  res.send('/ab+cd')
})
app.get('/ab*cd', (req, res) => {
  res.send('/ab*cd')
})
app.get('/ab(cd)?e', (req, res) => {
  res.send('/ab(cd)e?')
})
app.get('/a/', (req, res) => {
  res.send('/a/')
})
app.get('/*fly$/', (req, res) => {
  res.send('/.*fly$/')
})

var cb0 = function (req, res, next) {
    console.log('CB0')
    next()
  }
  
  var cb1 = function (req, res, next) {
    console.log('CB1')
    next()
  }
  
  app.get('/example/d', [cb0, cb1], function (req, res, next) {
    console.log('the response will be sent by the next function ...')
    next()
  }, function (req, res) {
    res.send('Hello from D!')
  })
app.listen(port, () => console.log(`Example app listening on port 3000!`))