import { model, Schema, PassportLocalModel, SchemaTypes } from "mongoose";

import { IChat } from "../../interfaces/models";

const chatSchema = new Schema({
  users: [{ type: SchemaTypes.ObjectId, ref: "User" }],
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

chatSchema.indexes = function () {
  // Disables indexing of embedded documents (User email in this case).
  // @ts-ignore
  return chatSchema._indexes;
};

const Chat: PassportLocalModel<IChat> = model<IChat>(
  "Chat",
  chatSchema
) as PassportLocalModel<IChat>;

export default Chat;
