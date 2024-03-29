const { Router } = require("express");
const route = Router();
const {
    getData,
    postData,
    getDataByNim,
    putData,
    deletByNim
} = require("../controllers/controllerAsync.js");
const cacheMiddleware = require("../middlewares/caching.js");
const checkView = require("../middlewares/checkView.js");

route.get("/get", cacheMiddleware, getData);

route.get("/:nim",cacheMiddleware, checkView, getDataByNim);

route.post("/add", postData);

route.put("/update/:nim", putData);

route.delete("/delete/:nim", deletByNim);

module.exports = route;
