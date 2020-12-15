import { Router } from "express";
import * as authController from "./controllers/authController";
import * as chatController from "./controllers/chatController";

const router = Router();

router.route("/register").post(authController.registerUser);
router.route("/login").post(authController.login);

// router.use((req, res, next) => {
//   if (req.isAuthenticated()) {
//     return next();
//   } else {
//     res.status(401).send("User not authenticated");
//   }
// });

router
  .route("/chats")
  .post(chatController.addChat)
  .get(chatController.getUserChats);
router.route("/chats/:chatId").post(chatController.addUserToChat);

export default router;
