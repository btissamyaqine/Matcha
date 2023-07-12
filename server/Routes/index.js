import express from "express";
import { getUsers, signup } from "../Controllers/Users.js";
import { verifyToken } from "../Middleware/VerifyToken.js";
 
const router = express.Router();
 
router.get('/profile', verifyToken, getUsers);
router.post("/signup", signup);
 
export default router;