const Express = require('express');
const session = require('express-session');

const app = Express();
const port = 3000;

app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

app.use(session({
    secret : "3@#SFSDGB^*(^&96urvy?>QWE",
    resave : false,
    saveUninitialized : false
}))

const auth = (req, res, next) => {
    if(req?.session?.isAuthentication){
        next();
        res.status(200).send("Login berhasil");
    } else {
        res.status(401).send("Unauthorized");
    }
}

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if(username === "admin" && password === "admin"){
        req.session.isAuthentication = true;
        res.status(200).send("Login berhasil");
    } else {
        res.status(401).send("Unauthorized");
    }
})

app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if(err){
            res.status(500).send("Internal Server Error");
        }
        res.status(200).send("Logout berhasil");
    });
})

app.get('/data', auth, (req, res) => {
    res.status(200).send("Data berhasil diakses");
})

app.listen(port, () => console.log(`Server berjalan di http://localhost:${port}`));