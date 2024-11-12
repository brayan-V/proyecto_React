import NavBar from './components/navBar';
import Headers from './components/headers';
import Footer from './components/Footer';
import Carusel from './components/Carusel';
// import Case from './components/Case';
// import Cpu from './components/Cpu';
// import TarjetasVideo from './components/TarjetasVideo';
// import Monitores from './components/Monitores';
// import Diademas from './components/Diademas';
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
            <div className="producto">
                <h2>
                    TARJETAS DE VIDEO
                </h2>
            </div>
            <div className="item">
                <span className="titulo-item">MSI GeForce RTX 4060 GAMING X GDDR6 8GB</span>
                <img src="/src/images/4060.webp" alt="" className="img-item"/>
                <span className="precio-item">$1.400.000</span>
                <span className="especificacion-item">Con una velocidad de 2.54 GHz Boost Clock. VRAM GDDR6 de 8 GB o 16 GB. Promedio de Consumo de energía de 140 W mientras se juega.</span>
                <button className="boton-item">Agregar al Carrito</button>
            </div>
            <div className="item">
                <span className="titulo-item">POWER COLOR FIGHTER RX6600 8GB GDDR6</span>
                <img src="/src/images/POWER-COLOR-RX6600.png" alt="" className="img-item"/>
                <span className="precio-item">$900.000</span>
                <span className="especificacion-item">Basada en la arquitectura AMD RDNA™ 2, la tarjeta gráfica PowerColor Fighter Radeon™ RX 6600 cuenta con 28 unidades de cómputo, 32 MB del nuevo AMD Infinity Cache y 8 GB de memoria GDDR6 dedicada, y está diseñada para ofrecer velocidades de cuadros ultra altas y lo último en 1080p. experiencia de juego.</span>
                <button className="boton-item">Agregar al Carrito</button>
            </div>
            <div className="item">
                <span className="titulo-item">ASUS ROG STRIX RTX 4080 16GB GDDR6X</span>
                <img src="/src/images/4080.png" alt="" className="img-item"/>
                <span className="precio-item">$6.256.000</span>
                <span className="especificacion-item">Su velocidad de reloj en modo OC alcanza los 2655 MHz, y su avanzado sistema de refrigeración incluye ventiladores con tecnología axial y una cámara de vapor patentada.</span>
                <button className="boton-item">Agregar al Carrito</button>
            </div>
            <div className="producto">
                <h2>
                    MONITORES
                </h2>
            </div>
            <div className="item">
                <span className="titulo-item">Monitor Gamer LG 24 pulgadas UltraGear FHD IPS 180Hz 1ms (GTG) 24GS65F-B</span>
                <img src="/src/images/Monitor1.png" alt="" className="img-item"/>
                <span className="precio-item">$790.000</span>
                <span className="especificacion-item">Monitor profesional Viewedge de 24 pulgadas FHD de 165 hz: el monitor profesional Viewedge de 24 pulgadas 1920 x 1080p 165 Hz utiliza un panel IPS con relación de contraste de millones: 1, ángulo de visión de 178 grados, HDR 10 y tiempo de respuesta de 1 ms. El monitor para juegos CS24FK proporciona la mejor experiencia de juego.</span>
                <button className="boton-item">Agregar al Carrito</button>
            </div>
            <div className="item">
                <span className="titulo-item">KTC Monitor de computadora QHD 100Hz de 24 pulgadas IPS 2K</span>
                <img src="/src/images/monitor2.png" alt="" className="img-item"/>
                <span className="precio-item">$470.000</span>
                <span className="especificacion-item">Visuales nítidas con pantalla QHD] Con alta resolución 2K, este monitor de computadora 1440P de 24 pulgadas tiene una calidad de imagen sin igual y una nitidez impresionante. Eleva tu visualización con nuestra pantalla QHD de vanguardia. Este monitor de computadora hace que cada momento cobre vida con nuestra pantalla QHD.</span>
                <button className="boton-item">Agregar al Carrito</button>
            </div>
            <div className="item">
                <span className="titulo-item">Monitor Xiaomi Curved Gaming 34 pulgadas G34wqi Black 180hz</span>
                <img src="/src/images/monitor3.png" alt="" className="img-item"/>
                <span className="precio-item">$1.300.000</span>
                <span className="especificacion-item">Ofrece una resolución de 3440 x 1440 para una experiencia visual impresionante en su pantalla ultraancha WQHD, proporcionando un horizonte expansivo. Con una respuesta rápida de 1 ms y una alta frecuencia de actualización de 180 Hz, garantiza un rendimiento fluido y sin interrupciones en tus juegos. La luz ambiental RGB y la curvatura dorada de 1500R añaden un toque estético y envolvente, haciendo que cada sesión de juego sea más inmersiva y atractiva.</span>
                <button className="boton-item">Agregar al Carrito</button>
            </div>
            <div className="producto">
                <h2>
                    DIADEMAS
                </h2>
            </div>
            <div className="item">
                <span className="titulo-item">Diadema Gamer Inalámbrica Logitech G535 LIGHTSPEED</span>
                <img src="/src/images/DIADEMA1.png" alt="" className="img-item"/>
                <span className="precio-item">$515.00</span>
                <span className="especificacion-item">Los G535 se han diseñado para un rendimiento de baja latencia, libertad sin cables y comodidad prolongada para todas tus sesiones de gaming. Disfruta de la tecnología inalámbrica avanzada LIGHTSPEED, 33 horas de batería y transductores de 40 mm para un sonido nítido y contundente. Un peso de sólo 236 gramos, una diadema ajustable y almohadillas de espuma viscoelástica suave garantizan comodidad prolongada.</span>
                <button className="boton-item">Agregar al Carrito</button>
            </div>
            <div className="item">
                <span className="titulo-item">Diadema Gamer Inalámbrica Astro A30 PlayStation 5 y PC / MAC</span>
                <img src="/src/images/diadema2.png" alt="" className="img-item"/>
                <span className="precio-item">$830.000</span>
                <span className="especificacion-item">Controla toda tu experiencia de audio y configura el A30 directamente desde tu teléfono. Administre su mezcla de audio, ecualizador y personalice cada aspecto del paisaje sonoro del A30 con un toque en la aplicación móvil gratuita Logitech G, compatible con dispositivos móviles iOS y Android.</span>
                <button className="boton-item">Agregar al Carrito</button>
            </div>
            <div className="item">
                <span className="titulo-item">Diadema Gamer Primus ARCUS 110T Edición AHSOKA</span>
                <img src="/src/images/diadema3.png" alt="" className="img-item"/>
                <span className="precio-item">$100.000</span>
                <span className="especificacion-item">Su velocidad de reloj en modo OC alcanza los 2655 MHz, y su avanzado sistema de refrigeración incluye ventiladores con tecnología axial y una cámara de vapor patentada.</span>
                <button className="boton-item">Agregar al Carrito</button>
            </div>
            <div className="producto">
                <h2>
                    MOUSE
                </h2>
            </div>
            <div className="item">
                <span className="titulo-item">ASUS ROG Spatha X, 12 botones programables, 19,000 DPI</span>
                <img src="/src/images/mouse1.png" alt="" className="img-item"/>
                <span className="precio-item">$545.000</span>
                <span className="especificacion-item">Máxima precisión: el sensor óptico de 19,000 DPI proporciona una precisión inigualable. La función DPI On-The-Scroll le permite ajustar fácilmente la sensibilidad del mouse inalámbrico sin acceder al software.</span>
                <button className="boton-item">Agregar al Carrito</button>
            </div>
            <div className="item">
                <span className="titulo-item">MOUSE GAMER RGB LOGITECH G203 LIGHTSYNC / 8000DPI</span>
                <img src="/src/images/mouse2.png" alt="" className="img-item"/>
                <span className="precio-item">$130.000</span>
                <span className="especificacion-item">G203 se ha diseñado para funcionar a la perfección en cualquier sistema, pero si quieres controles aún más precisos, puedes descargar gratis un software de personalización que es fácil de usar y configurar. El software de personalización G HUB permite personalizarlo todo: la iluminación, la sensibilidad y los comandos de los botones del mouse G203.</span>
                <button className="boton-item">Agregar al Carrito</button>
            </div>
            <div className="item">
                <span className="titulo-item">Mouse Lighting Gamer Inalambrico Iron Man  / 1600DPI</span>
                <img src="/src/images/mouse3.png" alt="" className="img-item"/>
                <span className="precio-item">$150.000</span>
                <span className="especificacion-item">Su sensor Bluetrack te permitirá usarlo en cualquier superficie, brindará más velocidad y detectará las órdenes con mayor exactitud. La funcionalidad al alcance de tu mano.El sistema de detección de movimiento óptico te permitirá mover el cursor de una manera más precisa y sensible que en los sistemas tradicionales.</span>
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