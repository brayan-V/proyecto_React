import React from "react";
import Navbar from "../NavBar";
import Header from "../Header";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";
import UserGreeting from "../UserGreeting";
import SaleChart from "./saleChart";

const Dashboard = ({ user, handleLogout }) => {
  const isAdmin = user?.esAdmin;
  
  return (
    <>
  <Header/>
  <Navbar/>
    <div className="mt-3 d-flex justify-content-end">
        {user ? (
          <div className="d-flex align-items-center">
            <UserGreeting user={user} />
            <button
              className="btn btn-danger mx-2"
              onClick={handleLogout}
            >
              <i className="fas fa-sign-out-alt"></i> Logout
            </button>
          </div>
        ) : (
          <>
            <button
              className="btn btn-primary mx-2"
              onClick={() => (window.location.href = "/login")}
            >
              <i className="fas fa-sign-in-alt"></i> Login
            </button>
            <button
              className="btn btn-success mx-2"
              onClick={() => (window.location.href = "/registro")}
            >
              <i className="fas fa-user-plus"></i> Signup
            </button>
          </>
        )}
      </div>
            <h1 className="dashboardTittle text-center">Bienvenido al Dashboard</h1>
        <SaleChart />
      <div className="contenedor">
        <Outlet /> {/* Contenido dinámico basado en las rutas */}
      </div>
      <Footer />
    
  </>
  )
};

export default Dashboard;
