import { model, Schema, PassportLocalModel } from "mongoose";

import { userSchema } from "./user";
import { IChat } from "../../interfaces/models";

const chatSchema = new Schema({
  users: [userSchema],
  messages: {
    type: [
      {
        displayName: { type: String },
        sendTime: { type: Date },
        message: { type: String },
      },
    ],
    default: [],
  },
});

const Chat: PassportLocalModel<IChat> = model<IChat>(
  "Chat",
  chatSchema
) as PassportLocalModel<IChat>;

export default Chat;
