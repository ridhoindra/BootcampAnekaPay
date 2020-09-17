const mongoose = require("mongoose");

mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb://localhost:27017/M04H01',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('Terhubung dengan database');
}).catch(err =>{
    console.log('Tidak terkoneksi dengan database');
    process.exit()
})