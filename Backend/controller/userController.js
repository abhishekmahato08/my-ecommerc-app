const userModel = require("../model/userModel.js");
const generateToken = require('../utils/jswToken')
const bcrypt =  require("bcrypt")

const userController = async (req, res) => {
  const { username, email, password } = req.body;

  const userExists = await userModel.findOne({ email });

  if (userExists) {
    return res.status(400).json({
      message: "already registerd",
    });
  }


  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await userModel.create({ username, email, password:hashedPassword });
  try {
    if (user) {
      res.status(201).json({
        _id: user._id,
        username: user.username,
        email: user.email,
        token: generateToken(user._id)

      });
    }
  } catch (error) {
    res.status(500).json({
      message: 'Internal server error',
    });
  }
};

const auth = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });
//&& (await user.matchPassword(password)))
    if (user) {          
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (passwordMatch) {
        res.json({
          _id: user._id,
          username: user.username,
          email: user.email,
          message: 'Logged In',
          token: generateToken(user._id),
        });
      } else {
        res.status(401).json({
          message: 'Password or email not match',
        });
      }
    } else {
      res.status(401).json({
        message: 'User not found',
      });
    }

  } catch (error) {
    res.status(404).json({
      message: "error",
    });
  }
}
module.exports = { userController, auth };
