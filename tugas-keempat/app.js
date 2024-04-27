const Express = require("express");
const route = require("./routes/route.js");
const MhsRoute = require("./routes/mahasiswa.js");
const MatkulRoute = require("./routes/matkul.js");
const app = Express();

app.use(Express.json());

app.use(route);
app.use("/v2", MhsRoute);
app.use("/matkul", MatkulRoute);

module.exports = app;