// Importaciones
import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import App from "./App";
import "./styles/estilo.css"

// Prepararemos la aplicacion en React
ReactDOM.createRoot(document.getElementById("root")).render(
  // Crer una instrucion para encontrar errores mientras ejecuta
  // React.StrictMode para auditar que nuestro codigo este libre de errores
  // la App no se lanzara hasta que se corrija errores si los hay
  <React.StrictMode>
    <App />
  </React.StrictMode>
)