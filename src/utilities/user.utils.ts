import User from "../models/user.model";
import { parseString, parseEmail } from "./utils";

export const createUserTemplate = (body: any): User => {
  const { id, name, email, password } = body;
  return {
    id: parseString(id),
    name: parseString(name),
    email: parseEmail(email),
    password: parseString(password),
  };
};
