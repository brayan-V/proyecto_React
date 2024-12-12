
// Funcion para crear la div con los datos de la categoria
export const categoria = (nombre, items, agregarAlCarritoClicked) => {

  return (
    <div className="contenedor-items">
      <div className="producto">
        <h2>{nombre}</h2>
      </div>
      {items.map((items, index) => (
          <div className="item" key={index}>
            <div className="card" style={{width: "18rem"}}>
              <img src={items.imagenSrc} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{items.titulo}</h5>
                <p className="card-text flex flex-col">
                  {items.especificacion}
                  <span className="precio-item mt-4">{items.precio}</span>
                </p>
                <button
                  className="boton-item"
                  onClick={() =>
                    agregarAlCarritoClicked(
                      items.titulo,
                      items.precio,
                      items.imagenSrc
                    )
                  }
                >
                  Agregar al Carrito
                </button>
              </div>
            </div>
          </div>
      ))}
    </div>
  );
};
