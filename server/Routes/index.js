import express from "express";
import { getUsers, Signup, Signin } from "../Controllers/Users.js";
import { verifyToken } from "../Middleware/VerifyToken.js";
import { refreshToken } from "../Controllers/RefreshToken.js";
 
const router = express.Router();
 
router.get('/profile', verifyToken, getUsers);
router.post('/signup', Signup);
router.post('/signin', Signin);
router.get('/token', refreshToken);
 
export default router;