import mongoose, { Document, Model } from "mongoose";
import { IUserRepositoryDTO } from "../../../../../core/DTO/user.DTO";

export type UserSchema = Document & IUserRepositoryDTO;

const userSchema = new mongoose.Schema({
  uid: String,
  creationDate: Date,
  firstname: String,
  lastname: String,
  email: String,
});

const UserModel: Model<UserSchema> = mongoose.model<UserSchema>("Users", userSchema);

export default UserModel;
