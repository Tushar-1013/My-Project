const mongoose = require("mongoose")
const product = require("../models/product.model.js")


const productModel = mongoose.Schema({

    id: {
        type: Number,
    },
    img: {
        type: String,
    },
    productname: {
        type: String,
    },

    category: {
        type: String,
    },

    subcategory: {
        type: String,
    },

    description: {
        type: String,
    },

    price: {
        type: Number,
    },
})

const Product = mongoose.model('Product', productModel)

module.exports = Product