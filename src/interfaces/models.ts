import { PassportLocalDocument } from "mongoose";
import { Document } from "mongoose";

export interface IUser extends PassportLocalDocument {
  email: string;
  password: string;
  displayName: string;
}

interface IMessage {
  userDisplayName: string;
  sendTime: Date;
  message: string;
}

export interface IChat extends Document {
  users: Array<IUser>;
  messages: Array<IMessage>;
  name: string;
  iconUrl: string;
}
