import mongoose, { Document, Model } from "mongoose";
import { User } from "../../../../../core/entities/user.entity";

type UserSchema = Document & User;

const userSchema = new mongoose.Schema({
  uid: String,
  firstname: String,
  lastname: String,
  email: String,
});

const UserModel: Model<UserSchema> = mongoose.model<UserSchema>("Users", userSchema);

export default UserModel;
