import express from "express";
import { getUsers, Signup, Signin, Logout } from "../Controllers/Users.js";
import { verifyToken } from "../Middleware/VerifyToken.js";
import { refreshToken } from "../Controllers/RefreshToken.js";
 
const router = express.Router();
 
router.get('/users', verifyToken, getUsers);
router.post('/users', Signup);
router.post('/signin', Signin);
router.get('/token', refreshToken);
router.delete('/logout', Logout);
 
export default router;