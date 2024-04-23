const Express = require("express");
const route = require("./routes/route.js");
const MhsRoute = require("./routes/mahasiswa.js");
const MatkulRoute = require("./routes/matkul.js");
const app = Express();
const PORT = 3000;
const db = require("./config/conDB.js");

app.use(Express.json());

app.use(route);
app.use("/v2", MhsRoute);
app.use("/matkul", MatkulRoute);

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
