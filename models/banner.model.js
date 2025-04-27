const mongoose = require("mongoose")


const bannerSchema = mongoose.Schema({
    title: {
        type: String,
    },
    banner: {
        type: String,
    }
})

const bannerModel = mongoose.model('banner', bannerSchema)

module.exports = bannerModel