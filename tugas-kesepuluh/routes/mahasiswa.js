const { Router } = require("express");
const route = Router();
const {
    getData,
    postData,
    getDataByNim,
    putData,
    deletByNim
} = require("../controllers/mahasiswaController.js");
const auth = require("../middlewares/auth");

route.get("/get", auth, getData);

route.get("/:nim", auth, getDataByNim);

route.post("/add", auth, postData);

route.put("/update/:nim", auth, putData);

route.delete("/delete/:nim", auth, deletByNim);

module.exports = route;
