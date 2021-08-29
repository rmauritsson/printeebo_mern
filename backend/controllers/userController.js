import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import colors from "colors";
import generateToken from "../utils/generateToken.js";


// @desc Authenticate User and get token
// @route POST /api/users/login
// @access PUBLIC
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            isBuyer: user.isBuyer,
            isCreator: user.isCreator,
            token: generateToken(user._id)
        })
    } else {
        res.status(401)
        throw new Error('Invalid Email or Password')
    }
})

export { authUser }