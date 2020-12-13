import { IUser } from "../../interfaces/models";
import * as userDal from "../dal/userDal";

export const registerUser = (
  email: string,
  password: string,
  displayName: string
): Promise<IUser> => {
  return userDal.registerUser(email, password, displayName);
};
