import User from "../../db/models/user";
import { IUser } from "../../interfaces/models";

export const getUserById = async (userId: string): Promise<IUser> => {
  const user = await User.findById(userId);
  if (!user) throw new Error(`UserId: ${userId} doesn't exist`);
  return user;
};

export const getAllUsers = async (): Promise<Array<IUser>> => {
  const users = await User.find({});
  return users;
};
