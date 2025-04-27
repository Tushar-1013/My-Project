const express = require('express')
const ImgHandler = require("../config/multer.js")
const bannerModel = require("../models/banner.model.js")
const router = express.Router()
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
    res.render('adminviews/addbanner.ejs')
})


module.exports = router