const Case = () =>{
    return(
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
        </div>
    );
};

export default Case;