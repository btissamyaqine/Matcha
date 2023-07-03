import express from 'express';
import cors from 'cors';
import mysql from 'mysql';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

const app = express();
app.use(cors({
  origin: ["http://localhost:3000"],
  methods: ["POST", "GET"],
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(session({

  secret: 'secret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    maxAge: 1000 * 60 * 24
  }
}))

const db = mysql.createConnection({
  host: "localhost",
  user: 'root',
  password: '',
  database: "matcha"  
})

app.post('/signup', async (req, res) => {
  const { first_name, last_name, username, email, password } = req.body;
  const sql = "INSERT INTO user (`first_name`, `last_name`, `username`, `email`, `password`) VALUES (?)";
  const values = [
    first_name,
    last_name,
    username,
    email,
    password
  ]

  db.query(sql, [values], (err, result) => {
    if(err) return res.json({Message: err})
    return res.json(result)
  })
});

app.post('/signin', (req,res) => {
  const sql = 'SELECT * FROM user WHERE email = ? and password = ?'
  db.query(sql, [req.body.email, req.body.password], (err, result) => {
    if(err) return res.json({Message: "Error from server"});
    if(result.length > 0) {
      req.session.username = result[0].username;
      console.log(req.session.username)
      return res.json({login: true})
    } else {
      res.json({login: false})
    }
  })
})
app.get('/profile', (req, res) =>{
  if(req.session.username) {
    return res.json({valid: true, username: req.session.username})
  } else {
    return res.json({valid: false})

  }
})

app.listen(5000, () => {
  console.log('server running ')
})