const express = require("express")
const product = require("../models/product.model.js")

const router = express.Router()


router.get('/', (req, res) => {
    res.render('adminviews/deleteproduct.ejs')
})


router.post('/', async (req, res) => {
    let { id, productname } = req.body

    if (!id || !productname) return res.json({ message: "All fields are required" })

    const existing = await product.findOneAndDelete({ id })
    if (existing) return res.json({ message: "product successfully deleted" })


})

module.exports = router