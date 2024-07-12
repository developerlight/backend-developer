const { Router } = require("express");
const {
  getMatkul,
  getMatkulById,
  postMatkul,
  updateMatkul,
  deleteMatkul,
  getNilaiByNimSmt,
} = require("../controllers/matkulController");
const route = Router();
const auth = require("../middlewares/auth");

route.get("/", auth, getMatkul);

route.get("/:id", auth, getMatkulById);

route.post("/add", auth, postMatkul);

route.put("/update/:id", auth, updateMatkul);

route.delete("/delete/:id", auth, deleteMatkul);

route.get("/:id/:smt", auth, getNilaiByNimSmt);

module.exports = route;
