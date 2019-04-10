const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    id: String,
    name: String,
    price: Number,
    imageUrl: String
});

module.exports = mongoose.model('product', productSchema, 'products');
