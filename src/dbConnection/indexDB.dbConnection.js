// export default connectedDB;
import mongoose from "mongoose"; // Import mongoose directly

// const DB_name should probably be part of the connection URL
const DB_name = "vishal";

// Async function to connect to the database
const connectedDB = async () => {
  try {
    // Use mongoose.connect() to establish a connection
    const instanceConnection = await mongoose.connect(`${process.env.DB_URL}/${DB_name}`, {
    });

    console.log(`Server is running on port: ${process.env.PORT}`);
    console.log("Database connected successfully");
    console.log("MongoDB connected to", instanceConnection.connection.host); // Correct way to access the host
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1); // Exit the process with failure
  }
};

// Export the connection function
export default connectedDB;
