import { Application, Response } from "express";
import router from "./api/routing";
import { json, urlencoded } from "body-parser";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import User from "./db/models/user";

const enableCors: any = (req: Request, res: Response, next: Function) => {
  res.header("Access-Control-Allow-Origin", "http://192.168.105.24:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Credentials", "true");
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
};

export const initPassport = (app: Application) => {
  app.use(
    require("express-session")({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());
};

const setLocalAuth = (): void => {
  passport.use(
    new LocalStrategy({ usernameField: "email" }, User.authenticate())
  );
  passport.serializeUser(User.serializeUser());
  passport.deserializeUser(User.deserializeUser());
};

const initApp = (app: Application) => {
  app.use(json());
  app.use(urlencoded({ extended: true }));
  app.use(enableCors);
  initPassport(app);
  setLocalAuth();
  app.use(router);
};

export default initApp;
