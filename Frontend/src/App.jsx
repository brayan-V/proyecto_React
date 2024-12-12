import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Swal from "sweetalert2";
import Carrito from "./components/Carrito";
import Case from "./components/Case";
import Cpu from "./components/Cpu";
import Diademas from "./components/Diademas";
import Monitores from "./components/Monitores";
import Mouse from "./components/Mouse";
import TarjetasVideo from "./components/TarjetasVideo";
import Teclados from "./components/Teclados";
import  Comentarios  from "./components/Comentarios";
import Home from "./components/Home";
import Carusel from "./components/Carusel";
import Login from "./components/Login";
import Registro from "./components/Registro";



const App = () => {
  const [carritoItems, setCarritoItems] = useState([]);

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

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} >
            <Route index element={<Carusel />} />
            <Route path="/Categorias/Cpu" element={<Cpu  agregarAlCarritoClicked={agregarAlCarritoClicked}/>} />
            <Route path="/Categorias/Case" element={<Case  agregarAlCarritoClicked={agregarAlCarritoClicked}/>} />
            <Route path="/Categorias/TarjetasVideo" element={<TarjetasVideo  agregarAlCarritoClicked={agregarAlCarritoClicked}/>} />
            <Route path="/Categorias/Diademas" element={<Diademas  agregarAlCarritoClicked={agregarAlCarritoClicked}/>} />
            <Route path="/Categorias/Monitores" element={<Monitores  agregarAlCarritoClicked={agregarAlCarritoClicked}/>} />
            <Route path="/Categorias/Mouses" element={<Mouse  agregarAlCarritoClicked={agregarAlCarritoClicked}/>} />
            <Route path="/Categorias/Teclados" element={<Teclados  agregarAlCarritoClicked={agregarAlCarritoClicked}/>} />
            <Route path="/comentarios" element={<Comentarios/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/registro" element={<Registro/>} />
          </Route>
        </Routes>
      <Carrito carritoItems={carritoItems} setCarritoItems={setCarritoItems} />
      </BrowserRouter>
  );
};

export default App;
