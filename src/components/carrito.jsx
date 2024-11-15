import React,{ useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';

const Carrito = ({ carritoItems, setCarritoItems }) => {

  const actualizarTotalCarrito = useCallback(() => {
    let total = 0;
    carritoItems.forEach(item => {
      const precio = parseFloat(item.precio.replace('$', '').replace('.', '').replace('.', ''));
      total += precio * item.cantidad;
    });
    total = Math.round(total * 100) / 100;
    document.querySelector('.carrito-precio-total').innerText = '$' + total.toLocaleString("es");
  }, [carritoItems]);

  useEffect(() => {
    actualizarTotalCarrito();
  }, [actualizarTotalCarrito]);

  const pagarClicked = () => {
    Swal.fire({
      title: 'Compra exitosa',
      text: "Gracias por la compra",
      icon: 'success'
    });
    setCarritoItems([]);
    ocultarCarrito();
  };

  const sumarCantidad = index => {
    const nuevosItems = [...carritoItems];
    nuevosItems[index].cantidad++;
    setCarritoItems(nuevosItems);
  };

  const restarCantidad = index => {
    const nuevosItems = [...carritoItems];
    if (nuevosItems[index].cantidad > 1) {
      nuevosItems[index].cantidad--;
      setCarritoItems(nuevosItems);
    }
  };

  const eliminarItemCarrito = index => {
    const nuevosItems = carritoItems.filter((_, i) => i !== index);
    setCarritoItems(nuevosItems);
    if (nuevosItems.length === 0) {
      ocultarCarrito();
    }
  };

  const ocultarCarrito = () => {
    if (carritoItems.length === 0) {
      document.querySelector('.carrito').style.marginRight = '-100%';
      document.querySelector('.carrito').style.opacity = '0';
      document.querySelector('.contenedor-items').style.width = '100%';
    }
  };

  return (
    <div className={`carrito ${carritoItems.length > 0 ? 'visible' : ''}`}>
      <div className="header-carrito">
        <h2>Carrito de Compras</h2>
      </div>
      <div className="carrito-items">
        {carritoItems.map((item, index) => (
          <div key={index} className="carrito-item">
            <img src={item.imagenSrc} width="80px" alt={item.titulo} />
            <div className="carrito-item-detalles">
              <span className="carrito-item-titulo">{item.titulo}</span>
              <div className="selector-cantidad">
                <i className="fa-solid fa-minus restar-cantidad" onClick={() => restarCantidad(index)}></i>
                <input type="text" value={item.cantidad} className="carrito-item-cantidad" disabled />
                <i className="fa-solid fa-plus sumar-cantidad" onClick={() => sumarCantidad(index)}></i>
              </div>
              <span className="carrito-item-precio">{
              `$${(parseFloat(item.precio.replace('$', '').replace('.', '').replace('.', '')) * item.cantidad).toLocaleString('es')}`}</span>
            </div>
            <button className="btn-eliminar" onClick={() => eliminarItemCarrito(index)}>
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        ))}
      </div>
      <div className="carrito-total">
        <div className="fila">
          <strong>Total</strong>
          <span className="carrito-precio-total">$0,00</span>
        </div>
        <button className="btn-pagar" onClick={pagarClicked}>Pagar</button>
      </div>
    </div>
  );
};

// Validación de propiedades
 Carrito.propTypes = {
   carritoItems: PropTypes.arrayOf(PropTypes.shape({
       titulo: PropTypes.string.isRequired,
       precio: PropTypes.string.isRequired,
       imagenSrc: PropTypes.string.isRequired,
       cantidad: PropTypes.number.isRequired,
     })).isRequired,
   setCarritoItems: PropTypes.func.isRequired,
 };
 export default Carrito;
