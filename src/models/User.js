const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = Schema({
        _id: { type: Schema.ObjectId, auto: true },
        nombre: String,

    })
    // la collection
module.exports = mongoose.model('usuarios', UserSchema)