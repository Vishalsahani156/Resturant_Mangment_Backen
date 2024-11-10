import express from "express";
import { regissterUser } from "./controllers/user.controllers.js";

const router = express.Route();
// this is register router 
// router.Route("/register").post(regissterUser);
router.post('/register', regissterUser);
//login router 
router.post("/login", loginController)

export default { router };        