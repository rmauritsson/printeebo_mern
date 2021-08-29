import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import colors from "colors";
import generateToken from "../utils/generateToken.js";

// @desc Authenticate User and get token
// @route POST /api/users/login
// @access PUBLIC
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    //console.log('user', user)

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            isAdmin: user.isAdmin,
            isBuyer: user.isBuyer,
            isCreator: user.isCreator,
            token: generateToken(user._id),
        });
    } else {
        res.status(401);
        throw new Error("Invalid Email or Password");
    }
});

// @desc Register a new User
// @route POST /api/users/
// @access PUBLIC
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, phone, isAdmin, isBuyer, isCreator } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
        res.status(401);
        throw new Error("User already exists");
    }

    const user = await User.create({
        name,
        email,
        password,
        phone,
        isAdmin,
        isBuyer,
        isCreator,
    });

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            isAdmin: user.isAdmin,
            isBuyer: user.isBuyer,
            isCreator: user.isCreator,
            token: generateToken(user._id),
        })
    } else {
        res.status(401);
        throw new Error("Invalid User Data");
    }
});

// @desc Get User Profile
// @route POST /api/users/profile
// @access PRIVATE
const getUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    if (user) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            isAdmin: user.isAdmin,
            isBuyer: user.isBuyer,
            isCreator: user.isCreator,
        });
    } else {
        res.status(401);
        throw new Error("Invalid Email or Password");
    }
});

export { authUser, registerUser, getUserProfile };
