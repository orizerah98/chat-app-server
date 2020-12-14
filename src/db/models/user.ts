import { model, Schema, PassportLocalModel } from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";
import isEmail from "validator/lib/isEmail";

import { IUser } from "../../interfaces/models";

export const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    validate: isEmail,
  },
  password: {
    type: String,
  },
  displayName: {
    type: String,
  },
});

userSchema.pre("save", function (next) {
  const t = this as any; // Document is User type but not defined yet
  t.displayName = this.get("displayName");
  next();
});

userSchema.plugin(passportLocalMongoose, { usernameField: "email" });

const User: PassportLocalModel<IUser> = model<IUser>(
  "User",
  userSchema
) as PassportLocalModel<IUser>;

export default User;
