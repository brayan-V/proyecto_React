const Cpu = () =>{
    return(
        <div className="contenedor-items">
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
    );
};

export default Cpu;