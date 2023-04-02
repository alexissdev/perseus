import User, { UserSchema } from "../models/user.model";

export const getUsers = async () => {
  const users: User[] = await UserSchema.find();

  return users;
};

export const getUser = async (id: string) => {
  const user = await UserSchema.findById(id);

  return user;
};

export const createUser = async (userTemplate: User) => {
  const user = new UserSchema(userTemplate);
  await user.save();

  return user;
};

export const updateUser = async (user: User) => {
  const updatedUser = await UserSchema.findByIdAndUpdate(user.id, user, {
    new: true,
  });

  return updatedUser;
};

export const deleteUser = async (id: string) => {
  const deletedUser = await UserSchema.findByIdAndDelete(id);

  return deletedUser;
};
