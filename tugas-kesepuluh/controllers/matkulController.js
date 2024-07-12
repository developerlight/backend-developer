const {
    WithParams,
    WithoutParams
} = require('../../tugas-kelima/utils/query.js')

const getMatkul = async (req, res) => {
    try {
        const result = await WithoutParams("SELECT * FROM mata_kuliah")
        if (result.length === 0) {
            return res.status(404).send("Data not found")
        }
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getMatkulById = async (req, res) => {
    try {
        const { id } = req.params
        if (!id) {
            return res.status(400).send("ID is required")
        }
        const q = `select mata_kuliah.kd_matkul, mata_kuliah.nama_matkul, mata_kuliah.dosen, mata_kuliah.semester, nilai.nilai 
        from nilai 
        inner join mata_kuliah 
        on nilai.kd_matkul = mata_kuliah.kd_matkul 
        where nilai.nim = ${id}`;

        const result = await WithParams(q, [id])
        if (result.length === 0) {
            return res.status(404).send("Data not found")
        }
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const postMatkul = async (req, res) => {
    try {
        if(!req.body) {
            return res.status(400).send("Data is required")
        }
        const { kd_matkul, nama_matkul, dosen, ruang } = req.body

        const result = await WithParams(
            "INSERT INTO mata_kuliah (kd_matkul, nama_matkul, dosen, ruang) VALUES (?, ?, ?, ?)",
            [kd_matkul, nama_matkul, dosen, ruang]
        )

        if(result.affectedRows === 0) {
            return res.status(400).send("Failed to add data")
        }
        res.status(200).json({ message: "Data added successfully" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const updateMatkul = async (req, res) => {
    try {
        if(!req.params || !req.body) {
            return res.status(400).send("ID and data are required")
        }

        const { id } = req.params
        const { nama_matkul, dosen, ruang } = req.body

        const result = await WithParams(
            "UPDATE mata_kuliah SET nama_matkul = ?, dosen = ?, ruang = ? WHERE kd_matkul = ?",
            [nama_matkul, dosen, ruang, id]
        )

        if(result.affectedRows === 0) {
            return res.status(400).send("Failed to update data")
        }

        res.status(200).json({ message: "Data updated successfully" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const deleteMatkul = async (req, res) => {
    try {
        if(!req.params) {
            return res.status(400).send("ID is required")
        }
        const { id } = req.params

        const result = await WithParams("DELETE FROM mata_kuliah WHERE kd_matkul = ?", [id])
        if(result.affectedRows === 0) {
            return res.status(400).send("Failed to delete data")
        }

        res.status(200).json({ message: "Data deleted successfully" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getNilaiByNimSmt = async (req, res) => {
    try {
        if (!req.params.id && !req.params.smt) {
            return res.status(400).send("ID and semester are required")
        }
        const { id, smt } = req.params

        const q = `select mata_kuliah.kd_matkul, mata_kuliah.nama_matkul, mata_kuliah.dosen, mata_kuliah.semester, nilai.nilai
                    from nilai
                    inner join mata_kuliah
                    on nilai.kd_matkul = mata_kuliah.kd_matkul
                    where nilai.nim = ? and mata_kuliah.semester = ?`;
        const result = await WithParams(q, [id, smt])
        if (result.length === 0) {
            return res.status(404).send("Data not found")
        }

        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    getMatkul,
    getMatkulById,
    postMatkul,
    updateMatkul,
    deleteMatkul,
    getNilaiByNimSmt
}
