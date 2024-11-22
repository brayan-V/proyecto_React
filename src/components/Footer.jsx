import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {

  return (
    <div>
      <footer className="text-white bg-dark py-4">
        <div className="container-fluid">
          <div className="row justify-content-between aling-items-center" >
            <div className="col-md-4">
            <Link to={"/"} className=" col-md-4">
            <img src="/images/logo1.png" className="mx-auto  rounded-circle" height="200" />
            </Link>
            </div>
            <div className="col-md-4">
            <ul className="list-unstyled">
            <h5>Sitio Desarrollado por</h5>
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

        <div>
        <p>&copy; 2024 Digital Dreams. Todos los derechos reservados.</p>
        <p>
          <a href="#" className="text-white">Política de Privacidad</a> | 
          <a href="#" className="text-white">Términos de Servicio</a>
        </p>
        </div>
            </div>
            <div className="col-md-4">
            <h5>Zona de dudas y comentarios</h5>
            
          <button type="button" className="btn mx-5 px-3 py-2">
       <Link to = "comentarios" className = "btn btn-primary mx-2 text-dark rounded-pill fw-bold">
        <i className = "fas fa-in-alt"></i>Comentario</Link>
          </button>
          
            </div>
          </div>
        </div>

      </footer>
    </div>
  );
};

export default Footer;
