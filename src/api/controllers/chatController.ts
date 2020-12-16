import * as chatService from "../services/chatService";
import { IExpressRouteCallback } from "../../interfaces/routing";

export const addChat: IExpressRouteCallback = async (req, res) => {
  try {
    const { userEmails, name, iconUrl } = req.body;
    if (!userEmails || !name || !iconUrl) {
      res
        .status(400)
        .send("Missing required parameters [name, userEmails, iconUrl]");
      return;
    }
    const chat = await chatService.addChat(userEmails, name, iconUrl);
    res.send(chat);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

export const getUserChats: IExpressRouteCallback = async (req, res) => {
  try {
    const { userId } = req.query;
    if (!userId) {
      res.status(401).send("User is not authenticated");
      return;
    }
    const chats = await chatService.getUserChats(userId as string);
    res.send(chats);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

export const addUserToChat: IExpressRouteCallback = async (req, res) => {
  try {
    const { chatId } = req.params;
    const { userId } = req.body;
    const chat = await chatService.addUserToChat(userId, chatId);
    res.send(chat);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
