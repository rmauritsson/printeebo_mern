import express from "express";
import asyncHandler from "express-async-handler";
import Store from "../models/storeModel.js";

const storeRouter = express.Router();

// @desc Fetch all stores
// @route GET /api/stores
// @access PUBLIC

storeRouter.get(
  "/",
  asyncHandler(async (req, res) => {
    const stores = await Store.find({});

    res.json(stores);
  })
);

// @desc Fetch single Store
// @route GET /api/store/id
// @access PUBLIC

storeRouter.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const store = await Store.findById(req.params.id);

    if (store) {
      res.json(store);
    } else {
      res.status(404);
      throw new Error("Store not found");
    }
  })
);

export default storeRouter;
