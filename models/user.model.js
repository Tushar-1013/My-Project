const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    name: {
        type: String,

    },
    email: {
        type: String,

    },

    password: {
        type: String,

    },
    role: {
        type: String,
    }
})

const User = mongoose.model('User', UserSchema)

module.exports = User