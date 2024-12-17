const mongoose = require("mongoose");

const Usuarios  = mongoose.model("Usuarios", new mongoose.Schema({
    nombreUsuario: {type: "string", required: true, unique: true},
    email: {type: "string", required: true, unique: true},
    clave: {type: "String", requered: true},
    esAdmin: {type: "boolean", required: true, default: false}
}));

module.exports = Usuarios;