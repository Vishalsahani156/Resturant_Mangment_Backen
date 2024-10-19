import { mongoose } from "mongoose";
import { DB_name } from "./util/constance.js";
const DB_URL="mongodb+srv://0987654321:0987654321@cluster0.alfed.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const connectedDB = async () => {
  try {
    const instanceconnection = await mongoose.connected(
      `${DB_URL}` / `${DB_name}`
    );
    console.log(process.env.PORT);
    console.log("Database connection successfullay ");
    console.log("MongoDBconnected", instanceconnection.connection.host);
  }
 catch (error) {
    console.log("Db connection is fail", error);
    process.exit();
  }
};

export default{connectedDB};
