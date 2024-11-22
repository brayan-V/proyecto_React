import React from "react";
import { Link, Outlet} from "react-router-dom";
import Headers from "./Headers";
import Footer from "./Footer";
import NavBar from "./NavBar";
const Home = () => {
  return (
    <>
      <Headers />
      <NavBar />
      <div className = "mt-3 d-flex justify-content-end">
       <Link to = "login" className = "btn btn-outline-primary mx-2">
        <i className = "fas fa-sign-in-alt"></i>Login
       </Link>
       <Link to = "registro" className = "btn btn-outline-success mx-2">
        <i className = "fas fa-user-plus"></i>signup
       </Link>
      </div>
      <div className="contenedor">
        <Outlet /> {/*aqui va el contenido de la aplicacion */}
      </div>
      <Footer />
    </>
  );
};

export default Home;
