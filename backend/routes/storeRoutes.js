import express from "express";
import { getStores, getStoreById } from "../controllers/storeController.js";

const storeRouter = express.Router();

storeRouter.route('/').get(getStores)


storeRouter.route('/:id').get(getStoreById)

export default storeRouter;
