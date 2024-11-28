const { Router } = require("express");
const {createPost, createLike, createComment} = require("../controllers/postController");



const postRoute = Router();
postRoute.post('/create', createPost);
postRoute.post('/createlike',createLike)
postRoute.post('/createcomment',createComment)


module.exports = postRoute;