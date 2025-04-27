const express = require("express")
const Jwt = require("jsonwebtoken")


const router = express.Router()

router.get('/', async (req, res) => {
    let token = req.headers?.cookie?.split("=")[1]

    if (!token) return res.redirect('/login')

    let decodedToken = Jwt.verify(token, 'hahaha')
    if (!decodedToken) return res.json({ message: "Some thing went wrong. Please Login again to Continue" })

    res.render('cart.ejs')

})


module.exports = router
