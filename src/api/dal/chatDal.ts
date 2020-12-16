import Chat from "../../db/models/chat";
import User from "../../db/models/user";
import { IChat } from "../../interfaces/models";
import * as userDal from "./userDal";

export const addChat = async (
  userEmails: string[],
  name: string,
  iconUrl: string
): Promise<IChat> => {
  const users = await User.find({ email: { $in: userEmails } });
  if (users.length !== userEmails.length)
    throw new Error(`Some users in ${userEmails} don't exist`);
  const chat = new Chat({ users: users, name: name, iconUrl: iconUrl });
  await chat.save();
  return chat;
};

export const addMessage = async (
  chatId: string,
  displayName: string,
  sendTime: Date,
  message: string
): Promise<void> => {
  const chat = (await Chat.findById(chatId)) as IChat;
  chat.messages.push({
    displayName: displayName,
    sendTime: sendTime,
    message: message,
  });
  await chat.save();
};

export const getUserChats = async (userId: string): Promise<Array<IChat>> => {
  const user = await userDal.getUserById(userId);
  if (!user) throw new Error(`UserId: ${userId} doesn't exist`);
  const chats = await Chat.find({ users: user });
  return chats;
};

export const addUserToChat = async (userId: string, chatId: string) => {
  const user = await userDal.getUserById(userId);
  if (!user) throw new Error(`UserId: ${userId} doesn't exist`);
  const chat = await Chat.findById(chatId);
  if (!chat) throw new Error(`ChatId: ${chatId} doesn't exist`);
  chat.users.push(user);
};
