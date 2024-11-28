const comment = require("../models/commentModel");
const like = require("../models/likeModel");
const post = require("../models/postModel");
const User = require("../models/userModel");

const createPost = async (req, res) => {
  try {
    const { user_id, title, description } = req.body;
    console.log("req.body :", req.body);

    const user = await User.findByPk(user_id);
    if (!user) {
      res.status(404).json({ success: false, message: "user not found" });
    }
    const data = await post.create({ user_id, title, description });
    return res.status(200).json({
      success: true,
      message: "Post upload successfully",
      Post_Details: data,
    });
  } catch (error) {
    console.log("Internal server error for post uploading :", error);
    res.status(500).json({
      success: false,
      message: "Internal server error for post uploading",
      error: error.message,
    });
  }
};

const createLike = async (req, res) => {
  try {
    const { user_id, post_id } = req.body;
    if (!user_id || !post_id) {
      res
        .status(404)
        .json({ success: false, message: "user id or post id is not found" });
    }
    const likes = await like.create({ user_id, post_id });
    res.status(201).json({
      success: true,
      message: `Like on post ${post_id} by user ${user_id}`,
      Like_Details: likes,
    });
  } catch (error) {
    console.log("Internal server error for do likes :", error);
    res.status(500).json({
      success: false,
      message: "Internal server error for do likes",
      error: error.message,
    });
  }
};

const createComment = async (req, res) => {
  try {
    const { user_id, post_id, content } = req.body;
    if (!user_id || !post_id || !content) {
      res.status(404).json({ message: "all filed are required!" });
    }

    const newComment = await comment.create({ user_id, post_id, content });
    res.status(200).json({
      message: `Comment is done by user ${user_id} on this post ${post_id}`,
      Comment_details: newComment,
    });
  } catch (error) {
    console.log("Internal server error for do comment :", error);
    res.status(500).json({
      success: false,
      message: "Internal server error for do comment",
      error: error.message,
    });
  }
};

module.exports = { createPost, createLike, createComment };
