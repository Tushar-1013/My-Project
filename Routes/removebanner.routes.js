const express = require('express')
const bannerModel = require("../models/banner.model.js")
const router = express.Router()


router.get('/', (req, res) => {
    res.render('adminviews/removebanner.ejs')
})

router.post('/', async (req, res) => {
    let { title } = req.body

    let banner = await bannerModel.findOneAndDelete({ title })

    if (banner) return res.json({ message: "Banner successfully removed" })
})

module.exports = router