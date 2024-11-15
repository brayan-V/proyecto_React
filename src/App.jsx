import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Headers from './components/Headers';
import NavBar from './components/NavBar';
import Carusel from './components/Carusel';
import Diademas from './components/Diademas';
import Cpu from './components/Cpu';
import Case from './components/Case';
import Monitores from './components/Monitores';
import Mouse from './components/Mouse';
import TarjetasVideo from './components/TarjetasVideo';
import Carrito from './components/Carrito';
import Footer from './components/Footer';

const App = () => {
  const [carritoItems, setCarritoItems] = useState([]);

  const agregarAlCarritoClicked = (titulo, precio, imagenSrc) => {
    const existe = carritoItems.find(item => item.titulo.toLowerCase() === titulo.toLowerCase());
    if (existe) {
      Swal.fire({
        title: 'Error',
        text: "El item ya se encuentra en el carrito",
        icon: 'error'
      });
      return;
    }
    setCarritoItems([...carritoItems, { titulo, precio, imagenSrc, cantidad: 1 }]);
  };

  return (
    <div>
      <Headers />
      <NavBar />
      <div className="d-flex justify-content-end">
        <button className="logout">Logout</button>
      </div>
      <Carusel />
      <section className="contenedor">
        <Cpu agregarAlCarritoClicked={agregarAlCarritoClicked}/>
        <Case agregarAlCarritoClicked={agregarAlCarritoClicked}/>
        <TarjetasVideo agregarAlCarritoClicked={agregarAlCarritoClicked}/>
        <Monitores agregarAlCarritoClicked={agregarAlCarritoClicked}/>
        <Mouse agregarAlCarritoClicked={agregarAlCarritoClicked}/>
        <Diademas agregarAlCarritoClicked={agregarAlCarritoClicked} />
      </section>
      <Carrito carritoItems={carritoItems} setCarritoItems={setCarritoItems} />
      <Footer />
    </div>
  );
};

export default App;
