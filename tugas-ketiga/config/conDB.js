const Mysql = require("mysql");

// config mysql
const db = Mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "tugas_ketiga",
});

// connect to mysql
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Mysql connected");
});

module.exports = db;