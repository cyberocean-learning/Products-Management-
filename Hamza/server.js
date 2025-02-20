// server.js
//import mongoose from 'mongoose';

require("dotenv").config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON data

// Import routes
const productRoutes = require('./routes/products.js');
const collectionRoutes = require('./routes/collections.js');

// Use routes with API prefix
app.use('/api/products', productRoutes);
app.use('/api/collections', collectionRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => {
    console.log(err);
  });
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
app.get("/", (req, res) => {
  res.send("ok");
});