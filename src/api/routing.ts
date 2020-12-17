import { Router } from "express";
import * as authController from "./controllers/authController";
import * as chatController from "./controllers/chatController";
import * as userController from "./controllers/userController";

const router = Router();

router.route("/register").post(authController.registerUser);
router.route("/login").post(authController.login);

router
  .route("/chats")
  .post(chatController.addChat)
  .get(chatController.getUserChats);
router.route("/chats/:chatId").post(chatController.addUserToChat);

router.route("/users").get(userController.getAllUsers);

export default router;
