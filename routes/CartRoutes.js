const express = require("express");
const { addToCart, getCart } = require("controllers/CartController.js");

const router = express.Router();

router.post("/add-to-cart", addToCart);
router.get("/get-cart/:userId", getCart);

module.exports = router;
