import User, { UserSchema } from "../models/user.model";

export const getUsers = async () => {
  const users: User[] = await UserSchema.find();

  return users;
};

export const getUser = async (id: string) => {
  const user = await UserSchema.findById(id);
  if (!user) {
    return null;
  }

  return user;
};

export const createUser = async (userTemplate: User) => {
  const user = new UserSchema(userTemplate);
  if (!user) {
    return null;
  }

  await user.save();
  return user;
};

export const updateUser = async (user: User) => {
  const updatedUser = await UserSchema.findByIdAndUpdate(user._id, user, {
    new: true,
  });

  return updatedUser;
};

export const deleteUser = async (id: string) => {
  const deletedUser = await UserSchema.findByIdAndDelete(id);

  return deletedUser;
};
