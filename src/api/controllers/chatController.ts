import Chat from "../../db/models/chat";
import User from "../../db/models/user";
import { IChat } from "../../interfaces/models";
import * as chatService from "../services/chatService";
import { IExpressRouteCallback } from "../../interfaces/routing";

export const addChat: IExpressRouteCallback = async (req, res) => {
  try {
    const { userEmails } = req.body;
    const chat = await chatService.addChat(userEmails);
    res.send(chat);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

export const getUserChats: IExpressRouteCallback = async (req, res) => {
  try {
    const { userId } = req.body;
    const chats = await chatService.getUserChats(userId);
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
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
