const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory cart storage
const carts = {}; // { userId: [ { productId, name, price, quantity } ] }

// Add to cart
app.post("/add-to-cart", (req, res) => {
  const { userId, productId, name, price, quantity } = req.body;

  if (!userId || !productId || !name || !price) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  if (!carts[userId]) {
    carts[userId] = [];
  }

  const existingItem = carts[userId].find((item) => item.productId === productId);
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    carts[userId].push({ productId, name, price, quantity });
  }

  res.json({ message: "Item added to cart", cart: carts[userId] });
});

// Get cart
app.get("/get-cart/:userId", (req, res) => {
  const { userId } = req.params;
  const cart = carts[userId] || [];
  res.json({ items: cart });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
