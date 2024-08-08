import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";

export const test = (req, res) => {
    res.json({
        message: "User working!",
    })
}

export const updateUser = async(req, res, next) => {
    if (req.user.id !== req.params.id) {
        return next(errorHandlerHandler(403, "You can update only your account!"));
        try {
            if (req.body.password) {
                req.body.password = bcryptjs.hashSync(req.body.password, 10);
            }
            const updateUser = await User.findByIdAndUpdate(req.params.id, {
                    $set: {
                        username: req.body.username,
                        email: req.body.email,
                        password: req.body.password,
                        avatar: req.body.avatar,
                    },

                }, { new: true }) //new: true returns the updated document
            const { password: pass, ...rest } = updateUser._doc;
            res.status(200).json(rest);

        } catch (error) {
            next(error);
        }
    }
}