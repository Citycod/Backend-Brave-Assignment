const Cart = require("../models/Cart");

// POST /add-to-cart
const addToCart = async (req, res) => {
  const { userId, productId, name, price, quantity } = req.body;

  try {
    let cart = await Cart.findOne({ userId });
    if (!cart) {
      cart = new Cart({ userId, items: [] });
    }

    const existingItem = cart.items.find((item) => item.productId === productId);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.items.push({ productId, name, price, quantity });
    }

    await cart.save();
    res.json({ message: "Item added to cart", cart });
  } catch (err) {
    res.status(500).json({ message: "Error adding to cart", error: err.message });
  }
};

// GET /get-cart/:userId
const getCart = async (req, res) => {
  const { userId } = req.params;

  try {
    const cart = await Cart.findOne({ userId });
    res.json({ items: cart ? cart.items : [] });
  } catch (err) {
    res.status(500).json({ message: "Error fetching cart", error: err.message });
  }
};

module.exports = { addToCart, getCart };
