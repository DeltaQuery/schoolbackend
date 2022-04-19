import mongoose from "mongoose";
import { Role } from "../types"

const UserSchema = new mongoose.Schema({
  user: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: Object.values(Role), 
    required: true
  }
}); 

const User = mongoose.model("User", UserSchema);
 
module.exports = User;
