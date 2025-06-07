import { Schema, model } from "mongoose";

const userSchema = new Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, default: "user" },
});

export default model("User", userSchema);
