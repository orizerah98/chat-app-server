import * as userService from "../services/userService";
import { IExpressRouteCallback } from "../../interfaces/routing";

export const registerUser: IExpressRouteCallback = async (req, res) => {
  try {
    const { username, password, displayName } = req.body;
    const user = await userService.registerUser(
      username,
      password,
      displayName
    );
    res.send(user);
  } catch (err) {
    res.status(500).send(err);
  }
};
