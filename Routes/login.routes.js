const express = require("express")
const jwt = require("jsonwebtoken")
const userModel = require("../models/user.model")
const bcrypt = require("bcrypt")



const router = express.Router()

router.get('/', (req, res) => {
    res.render('login.ejs')
})

router.post('/', async (req, res) => {

    let { email, password } = req.body

    if (!email || !password) return res.json({ message: "All fields are required" })
    let user = await userModel.findOne({ email: email })
    if (!user) return res.json({ message: "Invalid email or password" })

    let decodedPassword = await bcrypt.compare(password, user.password)
    if (!decodedPassword) return res.json({ message: "Invalid email or password" })

    let token = jwt.sign({ id: user._id, name: user.name, role: user.role }, "hahaha")
    res.cookie('token', token)

    res.redirect('/cart')
})

module.exports = router