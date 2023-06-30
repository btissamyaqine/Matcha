import express from 'express';
import cors from 'cors';
import mysql from 'mysql';

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: 'root',
  password: '',
  database: "matcha"  
})
app.post('/signup', (req, res) => {
  const sql = "INSERT INTO user (`first_name`, `last_name`, `username`, `email`, `password`) VALUES (?)";
  const values = [
    req.body.first_name,
    req.body.last_name,
    req.body.username,
    req.body.email,
    req.body.password
  ]

  db.query(sql, [values], (err, result) => {
    if(err) return res.json({Message: err})
    return res.json(result)
  })
})

app.listen(5000, () => {
  console.log('server running ')
})