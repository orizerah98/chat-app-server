import bcrypt from "bcrypt";
import * as authDal from "../dal/authDal";
import jwt from "jsonwebtoken";

export const registerUser = async (
  email: string,
  password: string,
  displayName: string
): Promise<string> => {
  const hashedPassword = bcrypt.hashSync(password, 8);
  const newUser = await authDal.createUser(email, hashedPassword, displayName);
  const token = jwt.sign(
    { id: newUser._id },
    process.env.JWT_SECRET as string,
    {
      expiresIn: 86400,
    }
  );
  return token;
};
