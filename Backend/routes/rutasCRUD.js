const express = require('express');
const Item = require("../models/Item")

const app = express.Router();
// Creamos las rutas para el CRUD

// Ruta para obtener todos los nombres con sus descripciones
// http://localhost:5000/items
app.get('/items', async (req, res) =>{
    const items = await Item.find();// Obtenemos la lista de los nombres en formato json
    res.json(items);
});

// Ruta para crear un nuevo usuario con su descripcion
// http://localhost:5000/items
app.post("/items", async (req, res) => {
    const newItem = new Item(req.body);
    await newItem.save(); //Guardamos el nombre y la descripcion en la bdd
    res.status(201).json(newItem);// Enviamos el dato del usuario creado en JSON
});

// Ruta para actualizar un elemento exitente
// http://localhost:5000/items/id?
app.put("/items/:id",  async (req, res) => {
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.json(updatedItem); // Ejecutamos el elemento actualizado en formato json
});

// Ruta para eliminar un elemento
// http://localhost:5000/items/id?
app.delete("/items/:id", async (req, res) => {
    await Item.findByIdAndDelete(req.params.id); // Eliminamos el elemento de la base de datos
    res.status(204).send();// Enviamos una respuesta sin contenido (elimino el dato)
});

module.exports = app;