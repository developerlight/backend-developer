const { Router } = require("express");
const {
  getMhs,
  postMhs,
  putMhsByNim,
  deleteMhsByNim,
  getMhsByNim,
  insertNilai,
} = require("../controllers/mhsController");
const mhsRouter = Router();

mhsRouter.get("/", getMhs);

mhsRouter.get("/:nim", getMhsByNim);

mhsRouter.post("/", postMhs);

mhsRouter.put("/:nim", putMhsByNim);

mhsRouter.delete("/:nim", deleteMhsByNim);

mhsRouter.put('/embed/:nim', insertNilai)

module.exports = mhsRouter;
