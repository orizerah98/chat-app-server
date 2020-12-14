import { Router } from "express";
import * as authController from "./controllers/authController";
import passport from "passport";

const router = Router();

router.route("/register").post(authController.registerUser);
router.post("/login", authController.login);

router.use(passport.authenticate("local")); // Every route after this line will be authenticated.

export default router;
