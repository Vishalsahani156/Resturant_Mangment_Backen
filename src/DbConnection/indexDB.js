import {mongdb}from "mongodb";
import{mongose} from "mongoose"
const dbname="vishal";
const connectedDB=async()=>{
    try {
        const instanceconnection=   await mongoose.connected(`${process.env.DB_URL}`/`${dbname}`);
        console.log("MongoDBconnected",instanceconnection.connection.host);
    }
 catch(error) {
    console.log("Db connection is fail",error);
    process.exit();
}
}