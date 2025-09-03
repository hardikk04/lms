import userModel from "../models/user-model.js";
import {
  compareHashedPassword,
  getHashedPassword,
} from "../utils/bcrypt-helper.js";
import generateToken from "../utils/generateToken.js";

export const register = async (req, res) => {
  try {
    const { email, name, password } = req.body;
    if (!email || !name || !password) {
      return res.status(400).json({
        success: false,
        message: "All input required for registration",
      });
    }

    const user = await userModel.findOne({ email });

    if (user) {
      return res.status(400).json({
        success: false,
        message: "User already exist",
      });
    }

    const hashedPassword = await getHashedPassword(password);

    const newUser = await userModel.create({
      name,
      email,
      password: hashedPassword,
    });

    return res.status(201).json({
      success: true,
      message: "New user Created",
      data: newUser,
    });
  } catch (error) {
    console.log("====================================");
    console.log("Error in Registration : ", error);
    console.log("====================================");
    return res.status(500).json({
      success: false,
      message: "Failed to register",
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All input required for login",
      });
    }

    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User does not exists please login",
      });
    }

    const isPasswordMatch = await compareHashedPassword(
      password,
      user.password
    );

    if (!isPasswordMatch) {
      return res.status(400).json({
        success: false,
        message: "Email and password does not match",
      });
    }

    generateToken(res, user, `Welcome back ${user.name}`);
  } catch (error) {
    console.log("====================================");
    console.log("Error in Login : ", error);
    console.log("====================================");
    return res.status(500).json({
      success: false,
      message: "Failed to Login",
    });
  }
};

