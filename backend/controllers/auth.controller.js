import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/jwt.js";

export const signup = async (req, res) => {
  try {
    const { fullName, username, password, gender, confirmPassword } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }
    const user = await User.findOne({ username });

    if (user) {
      return res.status(400).json({ error: "Username already exist" });
    }

    //hashing password
    const hashedPassword = bcrypt.hashSync(password, 10);

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;

    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    if (newUser) {
      generateTokenAndSetCookie(newUser._id, res);
      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePic,
        password: newUser.password,
      });
    } else {
      res.status(400).json({ error: "invalid user data!!!" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
    console.log("error in signing up...", error.message);
  }
};

export const login = (req, res) => {
  res.send("login users");
};

export const logout = (req, res) => {
  res.send("login users");
};
