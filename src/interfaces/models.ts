import { PassportLocalDocument } from "mongoose";
import { Document } from "mongoose";

export interface IUser extends PassportLocalDocument {
  username: string;
  password: string;
  displayName: string;
}

interface IMessage {
  userDisplayName: string;
  sendTime: Date;
  message: string;
}

export interface IChat extends Document {
  users: Array<string>;
  messages: Array<IMessage>;
}