import { User } from "./models/user.models.js";
import {bcrypt}from "bcrypt";
// this is the register  controler
const regissterUser = async (req, res) => {
  try {
    const { username, email, password, address, phone } = req.body;
    if (!username || !email || !password || !phone || !address) {
      return res.status(400).send({
        success: false,
        message: "plese provide all fild",
      });
    }
    // check the user
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(400).send({
        success: false,
        message: "user email allread exity please login user",
      });
    }

// Hashing and token using by bycrypt 
var salt=bcrypt.genSaltsync(10)
const genPassword=await bcrypt.hash(password,salt);

    // create the new user
    const user = await User.create({
      username,
      email,
      password:genPassword,
      address,
      phone,
    });
    return res.status(2001).send({
      success: true,
      message: "user register success fullay ",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error in register click ",
    });
  }
};
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send({
        success: false,
        message: "plese provide email or password ",
      });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(4001).send({
        success: false,
        message: "user email not find in data base",
      });
    }
    // cheak  user password 
    const  isMathc=await bcrypt.compare(salt);
    
    res.status(200).send({
      success: true,
      message: "login successfullay ",
    });
  } catch (error) {
    console.log(error),
      res.status(400).send({
        success: false,
        message: "error on login api",
      });
  }
};
export default { regissterUser, loginController };
