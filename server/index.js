const express = require("express")
const app = express();
const mysql = require("mysql2")
const cors = require("cors");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "banco",
})

app.use(express.json());
app.use(cors());

app.post("/register", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query("SELECT * FROM usuarios WHERE email =?", [email], 
  (err, result) => {
    if(err){
      res.send(err);
    }
    if(result.length == 0) {
      db.query("INSERT INTO usuarios (email,password) VALUES (?,?)",
      [email, password], (err, response) => {
        if(err) {
          res.send(err);
        }
        res.send({msg: "cadastrado com sucesso"})
      })
    }else {
      res.send({msg: "usuario ja cadastrado"})
    }
  });
})

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query("SELECT * FROM usuarios WHERE email = ? AND password = ?",
  [email, password], (err, result) => {
    if(err) {
      res.send(err);
    }
    if(result.length > 0) {
      res.send({msg: "usuario logado com sucesso"})
    } else {
      res.send({msg: "conta nao cadastrada"})
    }
  })
})

app.listen(3001,() => {
  console.log("executando porta 3001");
});