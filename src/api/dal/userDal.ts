import User from "../../db/models/user";
import { IUser } from "../../interfaces/models";

export const registerUser = (
  email: string,
  password: string,
  displayName: string | undefined
): Promise<IUser> => {
  const user = new User({
    email: email,
    displayName: displayName,
  });
  return User.register(user, password);
};
