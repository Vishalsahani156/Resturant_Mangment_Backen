import express from "express"
import dotenv from "dotenv"
import connectedDB from "./src/dbConnection/indexDB.dbConnection.js";
import {userRouter} from "./src/routers/auth.routers.js";

dotenv.config({
  path: "./.env",
});
const app = express();
connectedDB()
.then(() => {
  app.listen(process.env.PORT || 8080, () => {
    console.log("server is runnig ", process.env.PORT);
  })
})
.catch((err)=>{
  console.log("Mongodb  connection is fail is file is index js",err);

})
app.use("/api/v1/userregister",userRouter);
// export default {app};