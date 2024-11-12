const Diademas = () =>{
    return(
        <div className = "contenedor-items">
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
        </div>
    );
};

export default Diademas;