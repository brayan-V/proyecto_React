import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <h5>Nuestras Redes Sociales</h5>
            <a className="btn text-white" style={{ backgroundColor: '#3b5998' }} href="#!" role="button">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a className="btn text-white" style={{ backgroundColor: '#dd4b39' }} href="#!" role="button">
              <i className="fab fa-google"></i>
            </a>
            <a className="btn text-white" style={{ backgroundColor: '#ac2bac' }} href="#!" role="button">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <div className="col-md-4 mb-4">
            <h5>Sitio Desarrollado por</h5>
            <ul className="list-unstyled">
              <li>
                <a className="text-white" href="https://github.com/brayan-V" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i> Brayan
                </a>
              </li>
              <li>
                <a className="text-white" href="https://github.com/DANIARISTIZABAL" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i> Daniel
                </a>
              </li>
              <li>
                <a className="text-white" href="https://github.com/David-crypto-sys" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i> David
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 mb-4">
            <h5>¿Tienes alguna duda? Déjanos tus datos:</h5>
            <form>
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="nombre" placeholder="Tu nombre" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Correo Electrónico</label>
                <input type="email" className="form-control" id="email" placeholder="Tu correo electrónico" />
              </div>
              <div className="mb-3">
                <label htmlFor="mensaje" className="form-label">Mensaje</label>
                <textarea className="form-control" id="mensaje" rows="3" placeholder="Tu mensaje"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
          </div>
        </div>
        <hr />
        <p>&copy; 2024 Digital Dreams. Todos los derechos reservados.</p>
        <p>
          <a href="#" className="text-white">Política de Privacidad</a> | 
          <a href="#" className="text-white">Términos de Servicio</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
