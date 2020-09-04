const express = require('express')
const app = express()
const port = 3000
var router = express.Router()
const path = require('path')
var cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
// app.get('/', (req, res) => res.send('Hello World!'))

app.set('view engine',('ejs'))
app.set('views', path.join(__dirname, 'view'));
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


app.get('/', (req, res) => {
  res.render('regular')
})

app.post('/', function (req, res, next) {
    var data = req.body.data;
    if(data) next('route')
    else next()
}, function (req,res) {
    console.error("Data Undefinded");
    res.status(400).render('special')
})

app.post('/', function (req, res) {
    var data = req.body.data;
    var arrData = data.match(/[A-Z]/gi," ");
    var final = arrData.toString().replace(/,/g,"")
    res.send(final)
})

app.listen(port, () => console.log(`Example app listening on port port!`))