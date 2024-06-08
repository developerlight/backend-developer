const db = require('../config/conDB.js')

const getAll = (req, res) => {
  db.query("SELECT * FROM mahasiswa", (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Internal Server Error");
    }
    if (result.length === 0) {
      return res.status(404).send("Data not found");
    }
    res.send(result);
  });
};

const getByNim = (req, res) => {
  const { nim } = req.params;
  db.query("SELECT * FROM mahasiswa WHERE nim = ?", nim, (err, result) => {
    if (err) {
      throw err;
    }
    if (result.length === 0) {
      return res.send("Data not found");
    }
    res.send(result);
  });
};

const post = (req, res) => {
  const { name, nim, jurusan, angkatan, alamat } = req.body;
  db.query(
    "INSERT INTO mahasiswa (name, nim, jurusan, angkatan, alamat) VALUES (?, ?, ?, ?, ?)",
    [name, nim, jurusan, angkatan, alamat],
    (err, result) => {
      if (err) {
        throw err;
      }
      if (result.affectedRows === 0) {
        return res.send("Data not added");
      }
      res.send("Data added");
    }
  );
};

const updateByParams = (req, res) => {
  const { nim } = req.params;
  const { name, jurusan, angkatan, alamat } = req.body;

  db.query(
    "UPDATE mahasiswa SET name = ?, jurusan = ?, angkatan = ?, alamat = ? WHERE nim = ?",
    [name, jurusan, angkatan, alamat, nim],
    (err, result) => {
      if (err) {
        throw err;
      }
      if (result.affectedRows === 0) {
        return res.send("Data not found");
      }
      res.send("Data updated");
    }
  );
};

const updateByQuery = (req, res) => {
  const { nim } = req.query;
  const { name, jurusan, angkatan, alamat } = req.body;

  db.query(
    "UPDATE mahasiswa SET name = ?, jurusan = ?, angkatan = ?, alamat = ? WHERE nim = ?",
    [name, jurusan, angkatan, alamat, nim],
    (err, result) => {
      if (err) {
        throw err;
      }
      if (result.affectedRows === 0) {
        return res.send("Data not found");
      }

      res.send("Data updated");
    }
  );
};

const deletByNim = (req, res) => {
  const { nim } = req.params;

  db.query("DELETE FROM mahasiswa WHERE nim = ?", nim, (err, result) => {
    if (err) {
      throw err;
    }
    if (result.affectedRows === 0) {
      return res.send("Data not found");
    }
    res.send("Data deleted");
  });
};

module.exports = {
  getAll,
  getByNim,
  post,
  updateByParams,
  updateByQuery,
  deletByNim,
};
