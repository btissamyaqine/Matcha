import express from 'express';
import cors from 'cors';
import mysql from 'mysql';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import bcrypt from 'bcrypt';

const app = express();
app.use(cors({
  origin: ["http://localhost:3000"],
  methods: ["POST", "GET"],
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
// app.use(session({

//   secret: 'secret',
//   resave: false,
//   saveUninitialized: false,
//   cookie: {
//     secure: false,
//     maxAge: 1000 * 60 * 24
//   }
// }))

const db = mysql.createConnection({
  host: "localhost",
  user: 'root',
  password: '',
  database: "matcha"  
})

app.post('/signup', async (req, res) => {
  
  const { first_name, last_name, username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password.toString(), 10);
  const sql = "INSERT INTO user (`first_name`, `last_name`, `username`, `email`, `password`) VALUES (?,?,?,?,?)";
  const values = [
    first_name,
    last_name,
    username,
    email,
    hashedPassword
  ]

  db.query(sql, values, (err, result) => {
    if(err) return res.json({Message: err})
    return res.json(result)
  })
});
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Retrieve the hashed password from the database for the user attempting to log in
  connection.query(
    'SELECT password FROM user WHERE email = ?',
    [email],
    (error, results) => {
      if (error) {
        console.error('Error querying database:', error);
        res.sendStatus(500);
        return;
      }

      if (results.length === 0) {
        // User not found
        res.json({ authenticated: false });
      } else {
        const hashedPassword = results[0].password;

        // Compare the plain-text password with the hashed password
        bcrypt.compare(password, hashedPassword, (error, result) => {
          if (error) {
            console.error('Error comparing passwords:', error);
            res.sendStatus(500);
            return;
          }

          if (result) {
            // Passwords match, user is authenticated
            res.json({ authenticated: true });
          } else {
            // Passwords don't match, user is not authenticated
            res.json({ authenticated: false });
          }
        });
      }
    }
  );
});

// app.post('/signin', (req,res) => {
//   const { email } = req.body
//   const sql = 'SELECT * FROM user WHERE email= ?';
//   const values = [email];
  
//   db.query(sql, values, async (err, result) => {
//     if(err) {
//       return res.json({Message: "Error from server"})
//     } else {
//       if(result.length === 0) {
//         res.json({Success: false, Message: "Email not found" })
//         console.log(res)
        
//       } else {
//         const users = result[0];
//         const passwordMatch = await bcrypt.compare(req.body.password, users.password);

//         if(passwordMatch) {
//           res.json({ Success: true, Message: "Login successful" })
//         } else {
//           res.json({ Success: false, Message: "Incorrect password" })
//         }
        
//       }
//     }
    
//   })
// })
// app.get('/profile', (req, res) =>{
//   if(req.username) {
//     return res.json({valid: true, username: req.username})
//   } else {
//     return res.json({valid: false})

//   }
// })

app.listen(5000, () => {
  console.log('server running ')
})