const Express = require("express");
const session = require("express-session");
const app = Express();

// routes
const authRoute = require("./routes/auth");
const mahasiswaRoute = require("./routes/mahasiswa");
const matkulRoute = require("./routes/matkul");

app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

app.use(session({
    secret: "a235#453()#>:",
    resave: false,
    saveUninitialized: false,
}))

app.use("/auth", authRoute);
app.use("/mahasiswa", mahasiswaRoute);
app.use("/matkul", matkulRoute);

module.exports = app;