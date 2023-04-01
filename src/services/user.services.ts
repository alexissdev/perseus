import User, { UserSchema } from "../models/user.model";
import { Request, Response } from "express";

export const getUsers = async (_req: Request, res: Response) => {
  const users: User[] = await UserSchema.find();
  if (!users) {
    return res.status(404).json({ message: "No users found" });
  }

  return res.status(200).json(users);
};

export const getUser = async (req: Request, res: Response) => {
  const user = await UserSchema.findById(req.params.id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  return res.status(200).json(user);
};

export const createUser = async (req: Request, res: Response) => {
  const user = new UserSchema(req.body);
  await user.save();

  return res.status(201).json(user);
};

export const updateUser = async (req: Request, res: Response) => {
  const updatedUser = await UserSchema.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  if (!updatedUser) {
    return res.status(404).json({ message: "User not found" });
  }

  return res.status(200).json(updatedUser);
};

export const deleteUser = async (req: Request, res: Response) => {
  const deletedUser = await UserSchema.findByIdAndDelete(req.params.id);

  if (!deletedUser) {
    return res.status(404).json({ message: "User not found" });
  }

  return res.status(200).json(deletedUser);
}