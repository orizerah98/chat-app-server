import User from "../../db/models/user";
import { IUser } from "../../interfaces/models";

export const registerUser = (
  username: string,
  password: string,
  displayName: string | undefined
): Promise<IUser> => {
  const user = new User({
    username: username,
    displayName: displayName,
  });
  return User.register(user, password);
};
