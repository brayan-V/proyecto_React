// Importar las dependencias necesarias
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const rutasCRUD = require("./routes/rutasCRUD");
const rutaAutorizacion = require("./routes/rutaAutorizacion")
require("dotenv").config(); // Caragar las variables del entorno al inicio del archivo

//Configurar el servidor de express
const app = express();
//Middleware para analizar los JSON que se solicitan
app.use(express.json());

// Habilitamos el intercambio de informacion para permitir las diferentes solicitudes
app.use(cors());

// Rutas de la API
app.use(rutasCRUD);
app.use(rutaAutorizacion);

//Obtener la URI de MongoDB desde las variables del entorno
const mongoUri = process.env.MONGODB_URI;

mongoose.connect(mongoUri)
// Creamos una promesa para especificar si pudimos conectarnos a las base de datos
.then(() =>console.log("Conexion exitosa a mongoDB.."))
.catch((err) =>console.log("Error al conectar a la base de datos: ", err));

// Configurar el puerto y ponemos el servidor en produccion
const PORT = process.env.PORT || 5000;// Si no tienes un puerto asignado el servidor correra en el 5000
app.listen(PORT, () =>{
    console.log(`El servidor esta corriendo en el puerto: ${PORT}`);
});

