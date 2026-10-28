const express = require("express");

const app = express();

// http://localhost:3000/greet?name=Alex
app.get("/greet", (req, res) => {
  res.send("Nice to meet you " + req.query.name);
});

// http://localhost:3000/products/42
app.get("/products/:id", (req, res) => {
  res.send("Product ID: " + req.params.id);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});