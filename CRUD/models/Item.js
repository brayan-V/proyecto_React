const mongoose = require("mongoose");
// Creamos el modelo de Mongoose para nuestros datos
const Item = mongoose.model('dudasComentarios', new mongoose.Schema({
    nombre: {type: String, required: true},
    email: {type: String, required: true},
    mensaje: String
}));

module.exports = Item;