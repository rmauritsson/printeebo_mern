
import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";
import colors from "colors";


// @desc Fetch all products
// @route GET /api/products
// @access PUBLIC
const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({});

    res.json(products);
})

// @desc Fetch single product
// @route GET /api/products/id
// @access PUBLIC
const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id).populate({
        path: "store",
        model: "Store",
    }).populate({ path: "category", model: "Category" });

    console.log(`Product in Backend: ${product}`.brightMagenta.italic);

    if (product) {
        res.json(product);
    } else {
        res.status(404);
        throw new Error("Product not found");
    }
})

export { getProducts, getProductById }