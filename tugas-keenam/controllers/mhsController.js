const Mahasiswa = require("../models/mahasiswa");

const getMhs = async (req, res) => {
    try {
        const mhs = await Mahasiswa.find();
        if (mhs.length === 0) {
            return res.status(404).json({ message: 'Data kosong', data: mhs })
        }
        res.status(200).json({ message: 'Data ada', data: mhs });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const postMhs = async (req, res) => {
    try {
        if(!req.body) {
            return res.status(400).json({ message: 'Data tidak boleh kosong' });
        }
        const { nim, nama, angkatan, prodi } = req.body;
        const mhs = new Mahasiswa({ nim : nim, nama : nama, angkatan : angkatan, prodi : prodi});
        await mhs.save();
        res.status(201).json({ message: 'Data berhasil disimpan'});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const putMhsByNim = async (req, res) => {
    try {
        const mhs = await Mahasiswa.updateOne(req.params, req.body );
        if (mhs.modifiedCount === 0) {
            return res.status(404).json({ message: 'Data tidak ditemukan' });
        }
        res.status(200).json({ message: 'Data berhasil diupdate'});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deleteMhsByNim = async (req, res) => {
    try {
        if(!req.params) {
            return res.status(400).json({ message: 'NIM tidak boleh kosong' });
        }
        const mhs = await Mahasiswa.deleteOne(req.params);
        if (mhs.deletedCount === 0) {
            return res.status(404).json({ message: 'Data tidak ditemukan' });
        }
        res.status(200).json({ message: 'Data berhasil dihapus'});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getMhsByNim = async (req, res) => {
    try {
        if(!req.params) {
            return res.status(400).json({ message: 'NIM tidak boleh kosong' });
        }
        const mhs = await Mahasiswa.findOne(req.params);
        if (!mhs) {
            return res.status(404).json({ message: 'Data tidak ditemukan' });
        }
        res.status(200).json({ message: 'Data ada', data: mhs });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { 
    getMhs,
    postMhs,
    putMhsByNim,
    deleteMhsByNim,
    getMhsByNim
};