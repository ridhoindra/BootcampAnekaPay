const express = require('express')
const app = express()
require ('./models/koneksi')
const bodyParser = require('body-parser');
const pegawai = require('./controllers/pegawai');
const departemen = require('./controllers/departemen');

app.set('view engine', 'ejs');
app.use(express.static('views'));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/pegawai', pegawai);
app.use('/departemen', departemen);

app.listen(process.env.PORT || 8000,() => {
    console.log(`App Started on PORT ${process.env.PORT || 3000}`);
});