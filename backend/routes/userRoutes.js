import express from "express";
import { authUser, getUserProfile } from "../controllers/userController.js";
import { protectRoute } from "../middleware/authMiddleware.js";


const userRouter = express.Router();

userRouter.post('/login', authUser)

userRouter.route('/profile').get(protectRoute, getUserProfile)

export default userRouter;
