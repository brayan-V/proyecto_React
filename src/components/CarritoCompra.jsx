const CarritoCompra = () =>{
    return(
        <div className="carrito" id="carrito">
            <div className="header-carrito">
                <h2>Tu Carrito</h2>
            </div>

            <div className="carrito-items"> 
            </div>
            <div className="carrito-total">
                <div className="fila">
                    <strong>Tu Total</strong>
                    <span className="carrito-precio-total">
                        $120.000,00
                    </span>
                </div>
                <button className="btn-pagar">Pagar <i className="fa-solid fa-bag-shopping"></i> </button>
            </div>
        </div>
    );
};

export default CarritoCompra;