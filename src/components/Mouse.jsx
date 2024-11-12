const Mouse = () =>{
    return(
        <div className="contenedor-items">
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
    );
};

export default Mouse;