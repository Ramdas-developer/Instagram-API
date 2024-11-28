const { Router } = require("express");
const {createUser, getUser, getUserById} = require("../controllers/userController");


const userRoute = Router();

userRoute.post('/createUser',createUser);
userRoute.get('/alluser',getUser)
userRoute.get('/alluser/:id',getUserById)


module.exports = userRoute;