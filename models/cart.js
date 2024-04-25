const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const cartSchema = new Schema({
//     user: {
//         type: Schema.Types.ObjectId,
//         ref: 'User'
//     },
//     products: [
//         {
//             product: {
//                 type: Schema.Types.ObjectId,
//                 ref: 'Product'
//             },
//             quantity: {
//                 type: Number,
//                 default: 0
//             }
//         }
//     ]
// })

const cartSchema = new Schema({
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Cart', cartSchema);