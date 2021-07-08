import express from "express";
import asyncHandler from "express-async-handler";
import Category from "../models/categoryModel.js";

const categoryRouter = express.Router();

// @desc Fetch all categories
// @route GET /api/categories
// @access PUBLIC

categoryRouter.get(
  "/",
  asyncHandler(async (req, res) => {
    const categories = await Category.find({});

    res.json(categories);
  })
);

// @desc Fetch single category
// @route GET /api/categories/id
// @access PUBLIC

categoryRouter.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const category = await Category.findById(req.params.id);

    if (category) {
      res.json(category);
    } else {
      res.status(404).json({ message: "Category not found" });
    }
  })
);

export default categoryRouter;
