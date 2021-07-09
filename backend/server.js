import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import productRouter from "./routes/productRoutes.js";
import categoryRouter from "./routes/categoryRoutes.js";
import storeRouter from "./routes/storeRoutes.js";

dotenv.config();

connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

//GET
app.get("/", (req, res) => {
  res.send("Server is running");
});

app.use("/api/products", productRouter);
app.use("/api/stores", storeRouter);
app.use("/api/categories/", categoryRouter);

app.use((err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
});

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port: ${PORT}`)
);
