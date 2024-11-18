import React from "react";
const Carusel = () => {
  return (
    <div
        id="productCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/src/images/H5FLOW.png"
              className="d-block w-100"
              alt="Corsair 4000D Airflow"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>NZXT H5 Flow Compact</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="/src/images/casedrift.jpg"
              className="d-block w-100"
              alt="Aerocool Dryft V2"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Aerocool Dryft V2</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="/src/images/Ryzen-5-5600-1.jpg"
              className="d-block w-100"
              alt=""
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>AMD Ryzen 5 5600 AM4</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="/src/images/i51440.png"
              className="d-block w-100"
              alt=""
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Intel Core i5-14400F</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/src/images/4060.webp" className="d-block w-100" alt="" />
            <div className="carousel-caption d-none d-md-block">
              <h5>MSI GeForce RTX 4060 GAMING X GDDR6 8GB</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="/src/images/mouse3.png"
              className="d-block w-100"
              alt=""
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Mouse Lighting Gamer Inalambrico Iron Man / 1600DPI</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="/src/images/DIADEMA1.png"
              className="d-block w-100"
              alt=""
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Diadema Gamer Inalámbrica Logitech G535 LIGHTSPEED</h5>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#productCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#productCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>
  );
};

export default Carusel;
