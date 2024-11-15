// Funcion para crear la div con los datos de la categoria
export const categoria = (nombre, items,agregarAlCarritoClicked) =>{
    return(
        <div className="contenedor-items">
            <div className="producto">
                <h2>{nombre}</h2>
            </div>
            {items.map((items, index) => (
                <div className="item" key={index}>
                    <span className="titulo-item">{items.titulo}</span>
                    <img src={items.imagenSrc} alt="" className="img-item" />
                    <span className="precio-item">{items.precio}</span>
                    <span className="especificacion-item">{items.especificacion}</span>
                    <button className="boton-item" onClick={() => agregarAlCarritoClicked(
                        items.titulo,
                        items.precio,
                        items.imagenSrc
                    )}>Agregar al Carrito</button>
                </div>
            ))
            }
        </div>
    );
}