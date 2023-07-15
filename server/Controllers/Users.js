import Users from '../models/UserModel';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const getUsers = async(req, res) => {
  try {
    // const users = await Users.findOne({ email });
    //  if (users) return res.status(400).json({ message: "User already exists" });
     const users = await Users.findAll({
      attributes: ['first_name', 'last_name', 'username', 'email']
     });
     res.json(users);

  } catch (error) {
    console.log(error);
  }
}
export const Signup = async(req, res) => {
  const { first_name, last_name, username, email, password } = req.body;
  // const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password.toString(), 10);
  try {
    await Users.create({
      first_name: first_name,
      last_name: last_name,
      username: username,
      email: email,
      password: hashPassword
    });
    res.status(200).json({ msg : "Registartion Successful"});

  } catch (error) {
    res.status(500).json({ msg: "Something went wrong" });
    console.log(error)
  }
};

export const Signin = async(req, res) => {
  try {
      const user = await Users.findAll({
          where:{
              email: req.body.email
          }
      });
      const match = await bcrypt.compare(req.body.password, user[0].password);
      if(!match) return res.status(400).json({msg: "Wrong Password"});
      const userId = user[0].id;
      const firstName = user[0].first_name;
      const lastName = user[0].last_name;
      const username = user[0].username;
      const email = user[0].email;
      const accessToken = jwt.sign({userId, username, email}, process.env.ACCESS_TOKEN_SECRET,{
          expiresIn: '15s'
      });
      const refreshToken = jwt.sign({userId, username, email}, process.env.REFRESH_TOKEN_SECRET,{
          expiresIn: '1d'
      });
      await Users.update({refresh_token: refreshToken},{
          where:{
              id: userId
          }
      });
      res.cookie('refreshToken', refreshToken,{
          httpOnly: true,
          maxAge: 24 * 60 * 60 * 1000
      });
      res.json({ accessToken });
  } catch (error) {
      res.status(404).json({msg:"Email not found"});
  }
}
