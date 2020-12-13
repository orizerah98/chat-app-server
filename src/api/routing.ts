import { Router } from "express";
import * as userController from "./controllers/userController";

const router = Router();

router.route("/users").post(userController.registerUser);
