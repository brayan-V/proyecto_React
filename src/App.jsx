import NavBar from './components/navBar';
import Headers from './components/headers';
import Footer from './components/Footer';
import Carusel from './components/Carusel';
import Case from './components/Case';
import Cpu from './components/Cpu';
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
      <div className="contenedor-items">
            <div className="producto">
                <h2>
                    CASES
                </h2>
        </div>
            <div className="item">
            <span className="titulo-item">Corsair 4000D Airflow</span>
            <img src="/src/images/CORSA4000.png" alt="" className="img-item"/>
            <span className="precio-item">$1.200.000</span>
            <span className="especificacion-item">El CORSAIR 4000D AIRFLOW es un chasis ATX semitorre distintivo, optimizado para 
                disponer de un elevado caudal de aire, con una sencilla gestión del cableado y dos ventiladores 
                CORSAIR AirGuide de 120 mm incluidos para que la refrigeración sea excepcional.</span>
            <button className="boton-item">Agregar al Carrito</button>
        </div>
        <div className="item">
            <span className="titulo-item">NZXT H5 Flow Compact</span>
            <img src="/src/images/H5FLOW.png" alt="" className="img-item"/>
            <span className="precio-item">$500.999</span>
            <span className="especificacion-item">El H5 Flow RGB cuenta con dos ventiladores F140 RGB Core preinstalados y dos ventiladores
                F120Q Quiet Airflow, por lo que esta torre intermedia
                compacta se mantiene más fresca que fría. Con un rendimiento térmico optimizado y una gestión de
                cables intuitiva, el H5 Flow es un chasis ideal para la mayoría de las construcciones.</span>
            <button className="boton-item">Agregar al Carrito</button>
        </div>
        <div className="item">
            <span className="titulo-item">Aerocool Dryft V2</span>
            <img src="/src/images/casedrift.jpg" alt="" className="img-item"/>
            <span className="precio-item">$489.000</span>
            <span className="especificacion-item">El diseño único permite que los paneles frontal y lateral de vidrio templado proporcionen una visión perfectamente clara de su hardware. Diseñado centrándose enuna estética elegante, iluminación RGB personalizable, refrigeración mejorada y fácil gestión de cables, Dryft es la elección perfecta para los jugadores que buscan estilo y funcionalidad.
            </span>
            <button className="boton-item">Agregar al Carrito</button>
        </div>
        <div className="producto">
                <h2>
                    CPU
                </h2>
        </div>
        <div className="item">
                <span className="titulo-item">AMD Ryzen 5 5600 AM4</span>
                <img src="/src/images/Ryzen-5-5600-1.jpg" alt="" className="img-item"/>
                <span className="precio-item">$560.000</span>
                <span className="especificacion-item">El procesador AMD Ryzen 5 5600 incluye seis núcleos de CPU, una velocidad de reloj base de 3,9 GHz.</span>
                <button className="boton-item">Agregar al Carrito</button>
            </div>
            <div className="item">
                <span className="titulo-item">Intel Core i5-14400F</span>
                <img src="/src/images/i51440.png" alt="" className="img-item"/>
                <span className="precio-item">$970.000</span>
                <span className="especificacion-item">Aumente su productividad, juegos y creación de contenido con el procesador Intel Core i5-14400F LGA 1700 de 10 núcleos y 2,5 GHz.</span>
                <button className="boton-item">Agregar al Carrito</button>
            </div>
            <div className="item">
                <span className="titulo-item">AMD Ryzen 7 5700X3D</span>
                <img src="/src/images/R75700X3D.png" alt="" className="img-item"/>
                <span className="precio-item">$489.000</span>
                <span className="especificacion-item">Maximo rendimiento para tu juegos con 8 núcleos y 16 subprocesos de procesamiento, combinados con 100MB de caché, aumento máximo de 4.1 GHz y OC de memoria desbloqueado.</span>
                <button className="boton-item">Agregar al Carrito</button>
            </div>
        </div>
        <CarritoCompra />
      </section>
      <Footer />
    </div>
  );
}

export default App;