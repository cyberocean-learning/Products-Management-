// routes/collections.js
const express = require('express');
const Collection = require('../models/Collection');
const router = express.Router();

// Create a collection
router.post('/post', async (req, res) => {
  try {
    const { title, description } = req.body;
    const newCollection = new Collection(req.body);
    await newCollection.save();
    res.status(201).json(newCollection);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all collections
router.get('/get', async (req, res) => {
  try {
    const collections = await Collection.find();
    res.status(200).json(collections);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
