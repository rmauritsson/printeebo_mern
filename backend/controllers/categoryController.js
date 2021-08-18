
import asyncHandler from "express-async-handler";
import Category from "../models/categoryModel.js";

// @desc Fetch all categories
// @route GET /api/categories
// @access PUBLIC
const getCategories = asyncHandler(async (req, res) => {
    const categories = await Category.find({});

    res.json(categories);
})

// @desc Fetch single category
// @route GET /api/categories/id
// @access PUBLIC
const getCategoryById = asyncHandler(async (req, res) => {
    const category = await Category.findById(req.params.id);

    if (category) {
        res.json(category);
    } else {
        res.status(404);
        throw new Error("Category not found");
    }
})


export { getCategories, getCategoryById };
