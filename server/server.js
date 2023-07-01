import express from 'express';
import cors from 'cors';
import mysql from 'mysql';
import bcrypt from 'bcryptjs'

const app = express();
app.use(cors({
  origin: 'http://localhost:3000'
}))
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: 'root',
  password: '',
  database: "matcha"  
})
app.post('/signup', async (req, res) => {
  const { first_name, last_name, username, email, password } = req.body;
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const saltString = salt.toString();
  const encryptedPassword = await bcrypt.hash(password, saltString);
  const sql = "INSERT INTO user (`first_name`, `last_name`, `username`, `email`, `password`) VALUES (?,?,?,?,?)";
  const values = [
    first_name,
    last_name,
    username,
    email,
    encryptedPassword
  ]

  db.query(sql, [values], (err, result) => {
    if(err) return res.json({Message: err})
    return res.json(result)
  })
})

app.listen(5000, () => {
  console.log('server running ')
})