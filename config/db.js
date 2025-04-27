const mongoose = require("mongoose")

const Connection = async () => {
    mongoose.connect('mongodb+srv://tusharsolanki458:ok4XPyqkIBU9Mqkh@tusharcluster.c8qzl.mongodb.net/shop_hub')

        .then(() => {
            console.log('Database Successfully Connnected');
        })

        .catch((err) => {
            console.log(err)
        })

}

module.exports = Connection 