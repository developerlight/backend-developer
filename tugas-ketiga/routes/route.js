const { Router } = require("express");
const route = Router();
const {
  getAll,
  getByNim,
  post,
  updateByParams,
  updateByQuery,
  deletByNim,
} = require("../controllers/controller.js");

route.get("/", getAll);

route.get("/:nim", getByNim);

route.post("/add", post);

route.put("/update/:nim", updateByParams);

route.put("/update", updateByQuery);

route.delete("/delete/:nim", deletByNim);

module.exports = route;
