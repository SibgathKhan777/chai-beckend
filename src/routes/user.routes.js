import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js"; // Added `.js`

const router = Router();

router.route("/register").post(registerUser); // Fixed typo

export default router;
