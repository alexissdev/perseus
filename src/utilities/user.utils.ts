import User from "../models/user.model";
import { parseString, parseEmail, parsePassword } from "./utils";

export const createUserTemplate = async (body: any): Promise<User> => {
  const { _id, name, email, password } = body;

  const hashedPassword = await parsePassword(password);
  return {
    _id: parseString(_id),
    name: parseString(name),
    email: parseEmail(email),
    password: hashedPassword,
  };
};
