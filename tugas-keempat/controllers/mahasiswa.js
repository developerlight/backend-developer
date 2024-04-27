const { 
    WithParams,
    WithoutParams
} = require("../utils/query.js");

const getData = async (req, res) => {
  try {
    const result = await WithoutParams("SELECT * FROM mahasiswa");
    if (result.length === 0) {
      return res.status(404).send("Data not found");
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getDataByNim = async(req, res) => {
    try {
        const { nim } = req.params;
        const result = await WithParams(
            "SELECT * FROM mahasiswa WHERE nim = ?", 
            [nim]
        );
        if(result.length === 0) {
            return res.status(404).send("Data not found");
        }
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const postData = async (req, res) => {
  try {
    const { name, nim, jurusan, angkatan, alamat } = req.body;
    const result = await WithParams(
      "INSERT INTO mahasiswa (name, nim, jurusan, angkatan, alamat) VALUES (?, ?, ?, ?, ?)",
      [name, nim, jurusan, angkatan, alamat]
    );
    if (result.affectedRows === 0) {
      return res.status(400).send("Failed to add data");
    }
    res.status(200).json({ message: "Data added successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const putData = async(req, res) => {
    try {
        const { nim } = req.params;
        const { name, jurusan, angkatan, alamat } = req.body;

        const result = await WithParams(
            "UPDATE mahasiswa SET name = ?, jurusan = ?, angkatan = ?, alamat = ? WHERE nim = ?",
            [name, jurusan, angkatan, alamat, nim]
        );

        if(result.affectedRows === 0) {
            return res.status(400).send("Failed to update data");
        }

        res.status(200).json({ message: "Data updated successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deletByNim = async(req, res) => {
    try {
        const { nim } = req.params;
        const result = await WithParams(
            "DELETE FROM mahasiswa WHERE nim = ?",
            [nim]
        );
        if (result.affectedRows === 0) {
            return res.status(400).send("Failed to delete data");
        }

        res.status(200).json({ message: "Data deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getData,
    postData,
    getDataByNim,
    putData,
    deletByNim
}
