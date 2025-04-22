const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        
        required: true
    },
    price: Number,
    rating: Number,
    specs: [String],
    description: String,    
})

module.exports = mongoose.model('Product', productSchema);