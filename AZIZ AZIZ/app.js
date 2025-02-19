const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const collectionRoutes = require('./routes/collectionRoutes');


const app = express();
const PORT = process.env.PORT || 3000;


mongoose.connect('mongodb://localhost:27017/productsDB', {
   
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Failed to connect to MongoDB', err);
});


app.use(cors());
app.use(bodyParser.json());

app.use('/api/products', productRoutes);
app.use('/api/collections', collectionRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});