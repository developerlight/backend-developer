const Express = require("express");
const route = require("./routes/route.js");
const asyncRoute = require("./routes/routeAsync.js");
const app = Express();
const PORT = 3000;
const db = require("./config/conDB.js");

app.use(Express.json());

app.use(route);
app.use("/v2", asyncRoute);

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
