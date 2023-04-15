import Model from "./model";
import { Schema, model } from "mongoose";

export default interface User extends Model {
  name: string;
  email: string;
  password: string;
}

export const UserSchema = model<User>(
  "User",
  new Schema<User>({
    _id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  })
);
