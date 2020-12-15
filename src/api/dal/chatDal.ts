import Chat from "../../db/models/chat";
import User from "../../db/models/user";
import { IChat } from "../../interfaces/models";

export const addChat = async (
  userEmails: string[],
  name: string,
  iconUrl: string
): Promise<IChat> => {
  const users = await User.find({ email: { $in: userEmails } });
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
    userDisplayName: displayName,
    sendTime: sendTime,
    message: message,
  });
  await chat.save();
};

export const getUserChats = async (userId: string): Promise<Array<IChat>> => {
  const chats = await Chat.find({ messages: { $elemMatch: { _id: userId } } });
  return chats;
};

export const addUserToChat = async (userId: string, chatId: string) => {
  const user = await User.findById(userId);
  const chat = await Chat.findById(chatId);
  if (!user) {
    throw new Error("User doesn't exist");
  }
  chat?.users.push(user);
};
