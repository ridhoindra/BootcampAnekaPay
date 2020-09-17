const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    nama: { type: String },
    alamat: { type: String },
    bidang: { type: String },
    penanggung_jawab: {type: String,},
    created_at: { type: Date }
  });

module.exports = mongoose.model('departemen',userSchema)