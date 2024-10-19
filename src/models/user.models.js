import mongoose from "mongoose";
// Desion the schema
const userShcema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    fullname: {
      type: String,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "password is the requred"],
    },
    avatar: {
      type: String, // avatar is uploade from claudinary
      required: [true, "requred a avatar"],
    },
  },
  Timestamp()
);

export const User = mongoose.model("User", userShcema);
