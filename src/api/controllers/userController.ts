import * as userService from "../services/userService";
import { IExpressRouteCallback } from "../../interfaces/routing";

export const getAllUsers: IExpressRouteCallback = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.send(users);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
