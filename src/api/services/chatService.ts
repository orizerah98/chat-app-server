import * as chatDal from "../dal/chatDal";
import { IChat } from "../../interfaces/models";

export const addChat = (
  userEmails: string[],
  name: string,
  iconUrl: string
): Promise<IChat> => {
  return chatDal.addChat(userEmails, name, iconUrl);
};

export const addMessage = async (
  chatId: string,
  displayName: string,
  sendTime: Date,
  message: string
): Promise<void> => {
  chatDal.addMessage(chatId, displayName, sendTime, message);
};

export const getUserChats = (userId: string): Promise<Array<IChat>> => {
  return chatDal.getUserChats(userId);
};

export const addUserToChat = (
  userId: string,
  chatId: string
): Promise<IChat> => {
  return chatDal.addUserToChat(userId, chatId);
};
