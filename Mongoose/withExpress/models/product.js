const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    category: {
        type: String,
        enum: ['fruits', 'veges', 'dairy']
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;