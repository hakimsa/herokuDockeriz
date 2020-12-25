const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ProductoSchema = Schema({
    _id: { type: Schema.ObjectId, auto: true },
    nombre: String,
    descripcion: String,
    precio: String,
    categoria: String,
    img: String
})

//la collection
module.exports = mongoose.model('productos', ProductoSchema)