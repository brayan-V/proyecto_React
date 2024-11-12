const TarjetasVideo = () => {
    return(
        <div className="contenedor-items">
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
    </div>
    );
};

export default TarjetasVideo;