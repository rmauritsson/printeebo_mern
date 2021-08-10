import express from "express";
import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";
//import colors from "colors";

const productRouter = express.Router();

// @desc Fetch all products
// @route GET /api/products
// @access PUBLIC

productRouter.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});

    res.json(products);
  })
);

// @desc Fetch single product
// @route GET /api/products/id
// @access PUBLIC

productRouter.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id).populate({
      path: "store",
      model: "Store",
    });

    //console.log("Product in Backend", product);

    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error("Product not found");
    }
  })
);

export default productRouter;
