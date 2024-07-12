const Express = require("express");
const session = require("express-session");
const app = Express();

// routes
const routes = require("./routes/route");

app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

app.use(session({
    secret: "a235#453()#>:",
    resave: false,
    saveUninitialized: false,
}))

app.use(routes);

module.exports = app;