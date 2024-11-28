const comment = require("../models/commentModel");
const like = require("../models/likeModel");
const post = require("../models/postModel");
const User = require("../models/userModel");

const createUser = async (req, res) => {
  try {
    const { userName, email, phone, password } = req.body;
    const newUser = await User.create({ userName, email, phone, password });
    res.status(200).json({
      success: true,
      message: "User Created successfully",
      User_Details: newUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error for add new user",
      error: error.message,
    });
    console.log("Internal server error for add new user :", error);
  }
};

const getUser = async (req, res) => {
  try {
    const allUser = await User.findAll({
      include: [
        {
          model: post, attributes:['post_id','user_id','title','description'],
          include: [{ model: like , attributes:['post_id','user_id','like_id'] }, { model: comment }],
        },
      ],
    });

    res.json({
        success: true,
        message: "All user get successfully",
        All_user: allUser,
    })
    // .status(200).send(allUser);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error for all user getting",
      error: error.message,
    });
    console.log("Internal server error for all user getting :", error);
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("req.params:", req.params);
    const user = await User.findByPk(id);
    res.status(200).json({
      success: true,
      message: "All user get successfully",
      All_user: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error for all user getting",
      error: error.message,
    });
    console.log("Internal server error for all user getting :", error);
  }
};

module.exports = { createUser, getUser, getUserById };
