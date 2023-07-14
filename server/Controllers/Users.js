import Users from '../model/UserModel';
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

export const getUsers = async(req, res) => {
  try {
     const users = await Users.findAll({
      attributes: ['first_name', 'last_name', 'username', 'email']
     });
     res.json(users);

  } catch (error) {
    console.log(error);
  }
}
export const signup = async(req, res) => {
  const { first_name, last_name, username, email, password } = req.body;
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);
  try {
    await Users.create({
      first_name: first_name,
      last_name: last_name,
      username: username,
      email: email,
      password: hashPassword
    });
    res.json({ msg : "Registartion Successful"});

  } catch (error) {
    console.log(error)
  }
}
