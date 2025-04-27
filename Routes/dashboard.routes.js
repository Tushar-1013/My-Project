const express = require("express")
const jwt = require("jsonwebtoken")
const user = require("../models/user.model.js")


const mongoose = require("mongoose")

const router = express.Router()







router.get('/', (req, res) => {

    let token = req.headers?.cookie?.split('=')[1]
    if (!token) return res.redirect('login');

    let user = jwt.verify(token, 'hahaha')

    if (user.role != "admin") return res.json({ message: "Access denied" })


    res.render('adminviews/dashboard', { user })
    console.log(user.name);
    console.log(user);

})


module.exports = router