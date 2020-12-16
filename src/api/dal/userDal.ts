import User from "../../db/models/user";
import { IUser } from "../../interfaces/models";

export const getUserById = async (userId: string): Promise<IUser | null> => {
  const user = await User.findById(userId);
  return user;
};
