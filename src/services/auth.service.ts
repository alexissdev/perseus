import * as argon from "argon2";
import * as jtw from "jsonwebtoken";
import config from "../config/config";
import User, { UserSchema } from "../models/user.model";
import { getUser, createUser } from "./user.services";

export const login = async (
  possibleEmail: string,
  possiblePassword: string
): Promise<string> => {
  const user = await UserSchema.findOne({ email: possibleEmail });
  if (!user) {
    throw new Error("User not found");
  }
  const isPasswordValid = await argon.verify(user.password, possiblePassword);
  if (!isPasswordValid) {
    throw new Error("Password is not valid");
  }

  const token: string = jtw.sign({ id: user._id }, config.jwtSecret, {
    expiresIn: 60 * 60 * 24,
  });

  return token;
};

export const register = async (
  id: string,
  name: string,
  email: string,
  password: string
): Promise<String> => {
  const documentUser = await getUser(id);
  if (documentUser) {
    throw new Error(`User with id ${id} already exists`);
  }

  const userTemplate: User = {
    _id: id,
    name,
    email,
    password,
  };

  const user = await createUser(userTemplate);
  if (!user) {
    return "";
  }

  const token: string = jtw.sign({ id: user._id }, config.jwtSecret, {
    expiresIn: 60 * 60 * 24,
  });

  return token;
};
