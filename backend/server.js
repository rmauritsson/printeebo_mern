const express = require("express");
const products = require("./data/products");

const app = express();
const PORT = 5000;

//GET
app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((prod) => prod._id === req.params.id);
  res.json(product);
});

app.get("/api/stores", (req, res) => {
  res.send("Store API is running");
});

app.listen(PORT, console.log(`Server running on port: ${PORT}`));
