const Express = require("express");
const route = require("./routes/route.js");
const app = Express();
const PORT = 3000;

app.use(Express.json());

app.use(route);

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
