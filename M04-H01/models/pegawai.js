const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    nama: { type: String },
    usia: { type: Number },
    keahlian: {type: String},
    jabatan: {type: String,},
    created_at: { type: Date }
  });

module.exports = mongoose.model('pegawai',userSchema)