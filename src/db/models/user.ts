import { model, Schema, PassportLocalModel } from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

import { IUser } from "../../interfaces/models";

export const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    validate: {
      validator: (value: string) => {
        if (value.length > 16) {
          throw new Error("Username length is over 16 characters");
        }
      },
    },
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

userSchema.plugin(passportLocalMongoose, { usernameField: "username" });

const User: PassportLocalModel<IUser> = model<IUser>(
  "User",
  userSchema
) as PassportLocalModel<IUser>;

export default User;
