const express = require("express")
const app = express();
const mysql = require("mysql2")

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "banco",
})

app.get('/', (req, res) => {
  db.query(
    "INSERT INTO usuarios (email, password) VALUES ('kardek.anderson@gmail.com', '12345678')",
    (err, result) => {
      if(err) console.log(err)
    }
  )
})

app.listen(3001,() => {
  console.log("executando porta 3001")
})