import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Swal from "sweetalert2";

// Componentes
import Home from "./components/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login";
import Registro from "./components/Registro";
import Carrito from "./components/Carrito";
import Carusel from "./components/Carusel";
import Cpu from "./components/Cpu";
import Case from "./components/Case";
import TarjetasVideo from "./components/TarjetasVideo";
import Diademas from "./components/Diademas";
import Monitores from "./components/Monitores";
import Mouse from "./components/Mouse";
import Teclados from "./components/Teclados";
import Comentarios from "./components/Comentarios";

const App = () => {
  const [user, setUser] = useState(null); // Estado del usuario logueado
  const [carritoItems, setCarritoItems] = useState([]);

  // Función para agregar al carrito
  const agregarAlCarritoClicked = (titulo, precio, imagenSrc) => {
    const existe = carritoItems.find(
      (item) => item.titulo.toLowerCase() === titulo.toLowerCase()
    );
    if (existe) {
      Swal.fire({
        title: "Error",
        text: "El item ya se encuentra en el carrito",
        icon: "error",
      });
      return;
    }
    setCarritoItems([
      ...carritoItems,
      { titulo, precio, imagenSrc, cantidad: 1 },
    ]);
  };

  // Simular recuperación del usuario logueado (puedes integrar con JWT/localStorage)
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    Swal.fire({
      icon: "success",
      title: "Sesión cerrada",
      text: "Has cerrado sesión exitosamente.",
    });
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta principal con Home o Dashboard según el rol */}
        <Route
          path="/"
          element={
            user?.esAdmin ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <Home user={user} handleLogout={handleLogout} />
            )
          }
        >
          {/* Rutas para usuarios no administradores */}
          <Route index element={<Carusel />} />
          <Route
            path="/categorias/cpu"
            element={<Cpu agregarAlCarritoClicked={agregarAlCarritoClicked} />}
          />
          <Route
            path="/categorias/case"
            element={<Case agregarAlCarritoClicked={agregarAlCarritoClicked} />}
          />
          <Route
            path="/Categorias/TarjetasVideo"
            element={
              <TarjetasVideo
                agregarAlCarritoClicked={agregarAlCarritoClicked}
              />
            }
          />
          <Route
            path="/categorias/diademas"
            element={
              <Diademas agregarAlCarritoClicked={agregarAlCarritoClicked} />
            }
          />
          <Route
            path="/categorias/monitores"
            element={
              <Monitores agregarAlCarritoClicked={agregarAlCarritoClicked} />
            }
          />
          <Route
            path="/categorias/mouses"
            element={
              <Mouse agregarAlCarritoClicked={agregarAlCarritoClicked} />
            }
          />
          <Route
            path="/categorias/teclados"
            element={
              <Teclados agregarAlCarritoClicked={agregarAlCarritoClicked} />
            }
          />
          <Route path="/comentarios" element={<Comentarios />} />
        </Route>

        {/* Rutas para el administrador */}
        <Route
          path="/dashboard"
          element={
            user?.esAdmin ? (
              <Dashboard user={user} handleLogout={handleLogout} />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />

        {/* Rutas de autenticación */}
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/registro" element={<Registro />} />

        {/* Ruta para el carrito */}
        <Route
          path="/carrito"
          element={
            <Carrito
              carritoItems={carritoItems}
              setCarritoItems={setCarritoItems}
            />
          }
        />

        {/* Ruta 404 */}
        <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
