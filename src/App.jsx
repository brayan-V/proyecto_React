import NavBar from './components/navBar';
import Headers from './components/headers';
import Footer from './components/Footer';
import Carusel from './components/Carusel';
import Case from './components/Case';
import Cpu from './components/Cpu';
import TarjetasVideo from './components/TarjetasVideo';
import Monitores from './components/Monitores';
import Diademas from './components/Diademas';
import Mouse from './components/Mouse';
import CarritoCompra from './components/CarritoCompra';

const App = () =>{
  return(
    <div>
      <Headers />
      <NavBar />
      <div className="d-flex justify-content-end">
        <button className="logout">Logout</button>
      </div>
      <Carusel />
      <section className="contenedor">
     <TarjetasVideo />
        <Monitores />
        <Mouse />
        <Case />
        <Cpu />
        <Diademas />
        <CarritoCompra />   
      </section>
      <Footer />
    </div>
  );
}

export default App;