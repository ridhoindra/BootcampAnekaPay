const express = require('express')
const router = express.Router()
const pegawai = require('../models/pegawai')
const departemen = require('../models/departemen')
const { route } = require('express/lib/router')

router.get('/tambah',(req,res)=>{
    res.render('tambahDepartemen')
})

router.get('/edit/:id',(req,res)=>{
    departemen.findById({
        _id: req.params.id
    },(err,data)=>{
        if (err) {
            console.log(err);
            res.render('error', {
                err: 'Tidak bisa edit data'
            })
        } else {
            res.render('editDepartemen',{
                data:data
            })
        }
    })
})

router.get('/',(req,res)=>{
    departemen.find((err,data)=>{
        if (err) throw err;

        res.render('departemen',{
            data:data
        })
    }).catch(err =>{
        res.render('err',{
            data:'Tidak bisa menampilkan data'
        })
    })
})

router.post('/tambah',(req,res)=>{
    const {nama,alamat,bidang,penanggung_jawab} = req.body
    const created_at = Date.now()

    const data = new departemen({nama,alamat,bidang,penanggung_jawab,created_at})

    data.save(err=>{
        if (err) {
            res.render('err',{
                data:'tidak bisa tambah data'
            })
        }else{
            res.redirect('/departemen')
        }
    })
})

router.post('/edit/:id',(req,res)=>{
    departemen.findByIdAndUpdate({
        _id: req.params.id
    },req.body,(err)=>{
        if (err) {
            res.render('err',{
                data:'tidak bisa edit data'
            })
        }else{
            res.redirect('/departemen')
        }
    })
})

router.get('/delete/:id',(req,res)=>{
    departemen.findByIdAndDelete({
        _id: req.params.id
    },err=>{
        if (err) {
            res.render('err',{
                data:'tidak bisa hapus data'
            })
        }else{
            res.redirect('/departemen')
        }
    })
})

module.exports = router