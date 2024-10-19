import express from "express";
import cors from "cors";
// import morgan from "morgan";
import dotenv from "dotenv";
dotenv.config();
const app = express();

// cors is  the middlleware 
app.use(cors());
// morgan as a middlleware 
// app.use(morgan("dev"));
// Gnret  url http://localhost:8080
app.get("/", (req, res) => {
  return res.status(200).send("<h1> welcome to the new server </h1>");
});

app.listen(process.env.PORT||8080, () => {
  console.log("server is listen", process.env.PORT);
});
