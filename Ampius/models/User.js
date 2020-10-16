const mongoose = require('mongoose')

const UsersSchema = mongoose.Schema({
    userId: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Users', UsersSchema)