const express = require('express');
// bcryptjs: Para encriptar contraseñas.
const encriptador = require('bcryptjs');
// jsonwebtoken: Para manejar tokens de autenticación.
const token = require('jsonwebtoken');
const Usuario = require("../models/Usuarios")

const appRutas = express.Router();

// Ruta para registrar un nuevo usuario
appRutas.post("/registro", async (req, res) => {
    const { nombreUsuario, email, clave } = req.body;
    try{
        const usuarioExistente = await Usuario.findOne({ nombreUsuario});
        if(usuarioExistente){
            return res.status(409).json({ error:"El nombre de usuario ya se encuantra en uso!!!"})
        }
        const emailExistente = await Usuario.findOne({ email});
        if(emailExistente){
            return res.status(409).json({ error:"El email ya se encuantra en uso!!!"})
        }

        const claveEncriptada = await encriptador.hash(clave,10);
        const nuevoUsuarioEncriptado = new Usuario({ nombreUsuario, email, clave: claveEncriptada});
        await nuevoUsuarioEncriptado.save();
        res.status(201).json({ message: "Usuario registrado con exito!!!"});
    }catch(error){
        res.status(500).json({ error: "Error al registrar el usuario"});
    }
});

// ruta para el Login
appRutas.post("/login", async(req, res) => {
    const { nombreUsuario, email, clave } = req.body;
    try{
        const usuario = await Usuario.findOne({ nombreUsuario});
        if(!usuario){
            return res.status(404).json({ error: "Usuario no encontrado!!!"})
        }
        const claveCorrecta = await encriptador.compare( clave, usuario.clave);
        if(!claveCorrecta){
            return res.status(401).json({ error: "Contraseña incorrecta!!!"})
        }
        const tokenGenerado = token.sign({ id: usuario._id}, process.env.JWT_SECRET, { expiresIn: "1h"});
        res.json({ tokenGenerado});
    }catch(error){
        res.status(500).json({ error: "Error al iniciar sesion!!!"})
    }
});

module.exports = appRutas;