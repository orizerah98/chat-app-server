import * as userDal from "../dal/userDal";
import { IUser } from "../../interfaces/models";

export const getAllUsers = (): Promise<Array<IUser>> => {
  return userDal.getAllUsers();
};
