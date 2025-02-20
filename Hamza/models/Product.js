// models/Product.js
//import mongoose from 'mongoose';

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  collectionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Collection',  // Reference to the Collection model
    required: true
  }
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
