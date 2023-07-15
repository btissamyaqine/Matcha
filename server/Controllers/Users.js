import Users from '../models/UserModel';
import bcrypt from 'bcrypt';

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
export const signup = async(req, res) => {
  const { first_name, last_name, username, email, password } = req.body;
  // const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password.toString(), 10);
  try {
    const result = await Users.create({
      first_name: first_name,
      last_name: last_name,
      username: username,
      email: email,
      password: hashPassword
    });
    res.status(201).json({ msg : "Registartion Successful"}, result);

  } catch (error) {
    res.status(500).json({ msg: "Something went wrong" });
    console.log(error)
  }
}
