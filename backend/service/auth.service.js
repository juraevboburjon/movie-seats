import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../models/user.model.js";

class AuthService {
  async register(user) {
    const { userName, email, phoneNumber, password } = user;

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      throw new Error("Email already exists..!");
    }

    const hashedPass = await bcrypt.hash(password, 10);

    const newUser = await userModel.create({
      userName,
      email,
      phoneNumber,
      password: hashedPass,
    });

    return newUser;
  }

  async login(user) {
    const { email, password } = user;

    const existingUser = await userModel.findOne({ email });
    if (!existingUser) {
      throw new Error("Invalid password or email..!");
    }

    const isValidPassword = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isValidPassword) {
      throw new Error("Invalid password or email..!");
    }

    const token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    return { token, userName: existingUser.userName, role: existingUser.role };
  }

  async logout() {
    return { message: "User logout seccessfully..!" };
  }
}

export default new AuthService();
