const express = require('express')
const app = express()
require ('./models/koneksi')
const bodyParser = require('body-parser');
const pegawai = require('./models/pegawai')
// const departemen = require('../models/departemen')
const port = 3030

app.get('/pegawai', (req, res) => {
    pegawai.find((err,data)=>{
        if (err) throw err;

        res.json(data)
    }).catch(err =>{
        res.status(500).json(err)
    })
})

app.put('/pegawai/:id', function(req, res) {
    pegawai.findById({
        _id: req.params.id
    },(err,data)=>{
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(200).json({message:'update sukse',data:data})
        }
    })
});

app.listen(port, () => console.log(`Example app listening on port port!`))