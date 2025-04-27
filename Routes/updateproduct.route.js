const express = require("express")
const product = require("../models/product.model.js")

const router = express.Router()


router.get('/', (req, res) => {
    res.render('adminviews/updateproduct.ejs')
})

router.post('/', async (req, res) => {
    let { id, updatedname, updatedprice, description } = req.body
    try {
        console.log(updatedname);

        const Product = await product.findOneAndUpdate(
            { id },
            {
                productname: updatedname,
                price: updatedprice,
                description,
            }
        )
        console.log(Product.productname);

        if (!Product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.json({ message: 'Product updated successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error while updating product' });
    }
});


module.exports = router