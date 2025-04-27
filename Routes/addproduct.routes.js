const express = require("express")
const product = require("../models/product.model.js")
const ImgHandler = require("../config/multer.js")
const bannerModel = require("../models/banner.model.js")

const router = express.Router()
router.post('/', ImgHandler.single('productImg'), async (req, res) => {

    let { productname, category, subcategory, description, price } = req.body
    let productImg = req.file.filename
    console.log(req.file);

    if (!productname || !description || !price) return res.json({ message: "Name , description and price are required", status: 400 })

    let Product = await product.create({
        productname,
        category,
        subcategory,
        description,
        price,
        img: productImg,

    })


})

router.post('/addbanner', ImgHandler.single('banner'), async (req, res) => {
    let { title } = req.body
    let banner = req.file.filename
    console.log(banner);
    console.log(title);



    if (!title || !banner) return res.json({ message: "Fields cannot be empty" })

    let Banner = await bannerModel.create({
        title,
        banner,
    })


})

router.get('/', (req, res) => {
    res.render('adminviews/dashboard.ejs')
})


module.exports = router