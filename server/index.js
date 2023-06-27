const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
 
const db = mysql.createConnection({
  host: "localhost",
  database:"matcha",
  user:'root'
});

app.get('/', (req, res) => {
  return res.json("From Backend");
});

app.get('/signup', (req, res) => {
  const sql = 'SELECT * FROM user';
  db.query(sql, (err, data) => {
    if(err) return res.json(err);
    return res.json(data) 
  });
});

app.listen(3000, () => {
  console.log('server running ')
})