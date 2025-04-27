const express = require("express")
const mongoose = require("mongoose")
const Connection = require("./config/db")
const addproductRoute = require("./Routes/addproduct.routes")
const cartRoute = require("./Routes/Cart.routes.js")
const registerRoute = require("./Routes/register.routes.js")
const loginRoute = require("./Routes/login.routes.js")
const Product = require("./models/product.model.js")
const Banner = require("./models/banner.model.js")



const PORT = 3000

const app = express()

app.set('view engine', 'ejs')
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))

Connection()
app.get('/', async (req, res) => {
    // const products = [
    //     {
    //         name: "Beige T-Shirt",
    //         price: 20.0,
    //         image: "https://www.botnia.in/cdn/shop/files/PACKOF6_23_65892a22-dc5f-450f-979f-f82a56bb1a44.png?v=1716376204&width=3000"
    //     },
    //     {
    //         name: "Brown Tote Bag",
    //         price: 25.0,
    //         image: "https://via.placeholder.com/200x200.png?text=Tote+Bag"
    //     },
    //     {
    //         name: "Minimal Mug",
    //         price: 15.0,
    //         image: "https://via.placeholder.com/200x200.png?text=Mug"
    //     },
    //     {
    //         name: "Phone Case",
    //         price: 18.0,
    //         image: "https://via.placeholder.com/200x200.png?text=Phone+Case"
    //     }
    // ];
    const products = await Product.find()
    const banners = await Banner.find()

    // });

    res.render("index.ejs", { products, banners })
})

app.get('/shop', (req, res) => {
    res.render("shop.ejs")
})

app.get('/about', (req, res) => {
    res.render("about.ejs")
})

app.use('/cart', cartRoute)



app.use('/dashboard', addproductRoute)
app.use('/register', registerRoute)

app.use('/login', loginRoute)
app.get('/demo', (req, res) => {
    res.render("demo.ejs")
})


app.listen(PORT, (req, res) => {
    console.log(`server is running on Port ${PORT}`);
})
