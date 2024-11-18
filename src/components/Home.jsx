import React from "react";
import { Outlet} from "react-router-dom";
import Headers from "./Headers";
import Footer from "./Footer";
import NavBar from "./NavBar";
const Home = () => {
  return (
    <>
      <Headers />
      <NavBar />
      <div className="contenedor">
        <Outlet /> {/*aqui va el contenido de la aplicacion */}
      </div>
      <Footer />
    </>
  );
};

export default Home;
