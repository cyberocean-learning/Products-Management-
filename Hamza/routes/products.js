// routes/products.js
const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// Create a product
router.post('/post', async (req, res) => {
  try {
    const { title, description, price, collectionId } = req.body;
    const newProduct = new Product({ title, description, price, collectionId });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all products
router.get('/get', async (req, res) => {
  try {
    const products = await Product.find().populate('collectionId');
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
