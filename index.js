const express = require("express")
const mongoose = require("mongoose")
const Connection = require("./config/db")
const dashboardRoute = require("./Routes/dashboard.routes.js")
const cartRoute = require("./Routes/Cart.routes.js")
const registerRoute = require("./Routes/register.routes.js")
const loginRoute = require("./Routes/login.routes.js")
const Product = require("./models/product.model.js")
const Banner = require("./models/banner.model.js")
const updateproductRoute = require("./Routes/updateproduct.route.js")
const deleteproductRoute = require("./Routes/deleteproduct.routes.js")
const addproductRoute = require("./Routes/addproduct.routes.js")
const addbannerRoute = require("./Routes/addbanner.routes.js")
const removebannerRoute = require("./Routes/removebanner.routes.js")



const PORT = 3000

const app = express()

app.use(express.json())
app.set('view engine', 'ejs')
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))

Connection()
app.get('/', async (req, res) => {

    const products = await Product.find()
    const banners = await Banner.find()



    res.render("index.ejs", { products, banners })
})

app.get('/shop', (req, res) => {
    res.render("shop.ejs")
})

app.get('/about', (req, res) => {
    res.render("about.ejs")
})

app.use('/cart', cartRoute)



app.use('/dashboard', dashboardRoute)
app.use('/register', registerRoute)
app.use('/login', loginRoute)
app.use('/addproduct', addproductRoute)
app.use('/updateproduct', updateproductRoute)
app.use('/deleteproduct', deleteproductRoute)
app.use('/addbanner', addbannerRoute)
app.use('/removebanner', removebannerRoute)

app.listen(PORT, (req, res) => {
    console.log(`server is running on Port ${PORT}`);
})

app.get('/demo', (req, res) => {
    res.render('demo.ejs')
})