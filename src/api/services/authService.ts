import { IUser } from "../../interfaces/models";
import * as authDal from "../dal/authDal";

export const registerUser = (
  email: string,
  password: string,
  displayName: string
): Promise<IUser> => {
  return authDal.registerUser(email, password, displayName);
};
