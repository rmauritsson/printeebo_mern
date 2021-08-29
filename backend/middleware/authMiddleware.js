import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'
import asyncHandler from "express-async-handler";

const protectRoute = asyncHandler(async (req, res, next) => {
    let token

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1]

            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            // get user but hide the password
            req.user = await User.findById(decoded.id).select('-password')

            //console.log('User', req.user)


        } catch (error) {
            console.error('Error in Middleware', error)
            res.status(401)
            throw new Error('Not authorized, Token verification failed')
        }
    }

    if (!token) {
        res.status(401)
        throw new Error('Not authorized, No token')
    }

    next()

})

export { protectRoute }