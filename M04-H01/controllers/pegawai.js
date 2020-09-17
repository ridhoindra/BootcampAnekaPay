const express = require('express')
const router = express.Router()
const pegawai = require('../models/pegawai')
const departemen = require('../models/departemen')
const { route } = require('express/lib/router')

router.get('/tambah',(req,res)=>{
    res.render('tambahPegawai')
})

router.get('/edit/:id',(req,res)=>{
    pegawai.findById({
        _id: req.params.id
    },(err,data)=>{
        if (err) {
            console.log(err);
            res.render('error', {
                err: 'Tidak bisa edit data'
            })
        } else {
            res.render('editPegawai',{
                data:data
            })
        }
    })
})

router.get('/',(req,res)=>{
    pegawai.find((err,data)=>{
        if (err) throw err;

        res.render('pegawai',{
            data:data
        })
    }).catch(err =>{
        res.render('err',{
            data:'Tidak bisa menampilkan data'
        })
    })
})

router.post('/tambah',(req,res)=>{
    const {nama,usia,keahlian,jabatan} = req.body
    const created_at = Date.now()

    const data = new pegawai({nama,usia,keahlian,jabatan,created_at})

    data.save(err=>{
        if (err) {
            res.render('err',{
                data:'tidak bisa tambah data'
            })
        }else{
            res.redirect('/pegawai')
        }
    })
})

router.post('/edit/:id',(req,res)=>{
    pegawai.findByIdAndUpdate({
        _id: req.params.id
    },req.body,(err)=>{
        if (err) {
            res.render('err',{
                data:'tidak bisa edit data'
            })
        }else{
            res.redirect('/pegawai')
        }
    })
})

router.get('/delete/:id',(req,res)=>{
    pegawai.findByIdAndDelete({
        _id: req.params.id
    },err=>{
        if (err) {
            res.render('err',{
                data:'tidak bisa hapus data'
            })
        }else{
            res.redirect('/pegawai')
        }
    })
})

module.exports = router