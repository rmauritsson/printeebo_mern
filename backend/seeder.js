import mongoose from "mongoose";
import dotenv from "dotenv";
import users from "./data/users.js";
import products from "./data/products.js";
import stores from "./data/stores.js";
import categories from "./data/categories.js";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Store from "./models/storeModel.js";
import Category from "./models/categoryModel.js";
import Order from "./models/orderModel.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Category.deleteMany();
    await Store.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    //Created Users
    const createdUsers = await User.insertMany(users);

    //Created Stores
    const createdCategories = await Category.insertMany(categories);

    //Create Stores
    const adminUser = createdUsers[0]._id;

    const sampleStores = await stores.map((store) => {
      return { ...store, user: adminUser };
    });

    const createdStores = await Store.insertMany(sampleStores);

    //Create Products
    let categoryIDs = [];
    let storeIDs = [];

    createdStores.map((store) => {
      storeIDs.push(store._id);
    });

    createdCategories.map((cat) => {
      categoryIDs.push(cat._id);
    });

    const sampleProducts = await products.map((product) => {
      const randomCategory =
        categoryIDs[Math.floor(Math.random() * categoryIDs.length)];
      const randomStore = storeIDs[Math.floor(Math.random() * storeIDs.length)];

      return {
        ...product,
        user: adminUser,
        category: randomCategory,
        store: randomStore,
      };
    });

    //console.log("Created Users: ", createdUsers);
    //console.log("Created Stores: ", createdStores);
    //console.log("Created Categories: ", createdCategories);
    //console.log("Created Products: ", sampleProducts);

    await Product.insertMany(sampleProducts);

    console.log("Data Imported Successfully");
    process.exit();
  } catch (error) {
    console.error("Error", error);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Category.deleteMany();
    await Store.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log("Data Destroyed");
    process.exit();
  } catch (error) {
    console.error("Error", error);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
