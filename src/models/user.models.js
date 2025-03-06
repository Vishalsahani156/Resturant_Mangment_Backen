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
    // avatar: {
    //   type: String, // avatar is uploade from claudinary
    //   required: [true, "requred a avatar"],
    // },
    address: {
      type: Array,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    userType: {
      type: String,
      default: "clint",
      enum: ["clint", "admin", "vendor", "driver"],
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userShcema);
