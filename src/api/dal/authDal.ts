import User from "../../db/models/user";
import { IUser } from "../../interfaces/models";

export const createUser = async (
  email: string,
  hashedPassword: string,
  displayName: string
): Promise<IUser> => {
  const user = await User.create({
    email: email,
    password: hashedPassword,
    displayName: displayName,
  });
  return user;
};
