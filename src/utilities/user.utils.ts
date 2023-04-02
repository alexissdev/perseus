import User from "../models/user.model";
import { parseString, parseEmail } from "./utils";

export const createUserTemplate = (body: any): User => {
  const { _id, name, email, password } = body;

  return {
    _id: parseString(_id),
    name: parseString(name),
    email: parseEmail(email),
    password: parseString(password),
  };
};
