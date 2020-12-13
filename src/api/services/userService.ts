import { IUser } from "../../interfaces/models";
import * as userDal from "../dal/userDal";

export const registerUser = (
  username: string,
  password: string,
  displayName: string
): Promise<IUser> => {
  return userDal.registerUser(username, password, displayName);
};
