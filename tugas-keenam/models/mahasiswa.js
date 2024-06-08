const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mhsSchema = new Schema({
    nim : {
        required: true,
        type: String
    },
    nama : {
        required: true,
        type: String
    },
    angkatan : {
        required: true,
        type: String
    },
    prodi : {
        required: true,
        type: String
    }
})

const Mahasiswa = mongoose.model('mahasiswa', mhsSchema);

module.exports = Mahasiswa;