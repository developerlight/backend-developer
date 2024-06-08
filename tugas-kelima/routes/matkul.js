const { Router } = require("express");
const {
  getMatkul,
  getMatkulById,
  postMatkul,
  updateMatkul,
  deleteMatkul,
  getNilaiByNimSmt,
} = require("../controllers/matkul");
const route = Router();

route.get("/", getMatkul);

route.get("/:id", getMatkulById);

route.post("/add", postMatkul);

route.put("/update/:id", updateMatkul);

route.delete("/delete/:id", deleteMatkul);

route.get("/:id/:smt", getNilaiByNimSmt);

module.exports = route;
