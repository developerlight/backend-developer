const { Router } = require("express");
const route = Router();
const {
  getAll,
  getByNim,
  post,
  updateByParams,
  updateByQuery,
  deletByNim,
  getNama
} = require("../controllers/controller.js");
const cacheMiddleware = require("../middlewares/caching.js");

route.get("/",cacheMiddleware, getAll);

route.get("/:nim",cacheMiddleware ,getByNim);

route.post("/add", post);

route.put("/update/:nim", updateByParams);

route.put("/update", updateByQuery);

route.delete("/delete/:nim", deletByNim);

route.get('/nama', getNama)

module.exports = route;
