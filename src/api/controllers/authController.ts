import passport from "passport";
import { IExpressRouteCallback } from "../../interfaces/routing";
import User from "../../db/models/user";
import { IUser } from "../../interfaces/models";

export const registerUser: IExpressRouteCallback = async (req, res) => {
  try {
    const { email, password, displayName } = req.body;
    if (!email || !password) {
      res.status(400).send("Missing email or password");
      return;
    }
    User.register(
      { email: email, displayName: displayName } as IUser,
      password,
      function (err, user) {
        passport.authenticate("local")(req, res, () => {
          res.send(user);
        });
      }
    );
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
};

export const login: IExpressRouteCallback = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).send("Missing email or password");
      return;
    }
    const user = await User.findByUsername(email, false);
    req.login(user, (err) => {
      if (err) {
        console.log(err);
        res.status(401).send(err);
      } else {
        passport.authenticate("local")(req, res, () => {
          res.send(user);
        });
      }
    });
  } catch (err) {
    res.status(500).send(err);
  }
};
