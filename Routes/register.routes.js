const express = require("express")
const UserModel = require("../models/user.model.js")
const bcrypt = require("bcrypt")

const router = express.Router()

router.get('/', (req, res) => {
    res.render('register.ejs')
})

router.post('/', async (req, res) => {
    let { name, email, password, confirmPassword } = req.body

    if (!name || !email || !password || !confirmPassword) return res.json({ message: "All fields are required" })

    let existingUser = await UserModel.findOne({ email })
    if (existingUser) return res.json({ message: "User already registered" })

    if (password != confirmPassword) return res.json({ message: "password fields must be same" })

    let hashPass = await bcrypt.hash(password, 10)

    let User = UserModel.create({
        name,
        email,
        password: hashPass,
        role: "user",
    })

    res.redirect('./login')
})


module.exports = router
