const express = require("express")
const ImgHandler = require("../config/multer.js")
const product = require("../models/product.model.js")

const router = express.Router()

router.get('/', (req, res) => {
    res.render('adminviews/addproduct.ejs')
})

router.post('/', ImgHandler.single('productImg'), async (req, res) => {

    let { id, productname, category, subcategory, description, price } = req.body
    let productImg = req.file.filename
    console.log(req.file);

    if (!id || !productname || !description || !price) return res.json({ message: "Name , description and price are required", status: 400 })
    // let existingProduct = product.findOne({ _id: id })
    // if (existingProduct) return res.json({ message: "Product with this Id already exists" })
    let Product = await product.create({
        id,
        productname,
        category,
        subcategory,
        description,
        price,
        img: productImg,

    })


})


module.exports = router