import React from "react";

const Carusel = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="/images/H5FLOW.png"
            className="d-block w-100"
            alt="Corsair 4000D Airflow"
          />
          <div className="carousel-caption d-none d-md-block">
            {/* <h5>NZXT H5 Flow Compact</h5>
            <p>Un chasis compacto con un excelente flujo de aire.</p> */}
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="/images/casedrift.jpg"
            className="d-block w-100"
            alt="Aerocool Dryft V2"
          />
          <div className="carousel-caption d-none d-md-block">
            {/* <h5>Aerocool Dryft V2</h5>
            <p>Diseño elegante y funcional para tus componentes.</p> */}
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="/images/Ryzen-5-5600-1.jpg"
            className="d-block w-100"
            alt="AMD Ryzen 5 5600 AM4"
          />
          <div className="carousel-caption d-none d-md-block">
            {/* <h5>AMD Ryzen 5 5600 AM4</h5>
            <p>Rendimiento excepcional para juegos y multitarea.</p> */}
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="/images/i51440.png"
            className="d-block w-100"
            alt="Intel Core i5-14400F"
          />
          <div className="carousel-caption d-none d-md-block">
            {/* <h5>Intel Core i5-14400F</h5>
            <p>Potente procesador para tus necesidades diarias.</p> */}
          </div>
        </div>
        <div className="carousel-item">
          <img
          src="/images/4060.webp"
            className="d-block w-100"
            alt="MSI GeForce RTX 4060 GAMING X GDDR6 8GB"
          />
          <div className="carousel-caption d-none d-md-block">
            {/* <h5>MSI GeForce RTX 4060 GAMING X GDDR6 8GB</h5>
            <p>Gráficos impresionantes para una experiencia de juego inmersiva.</p> */}
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="/images/prueba2.png"
            className="d-block w-100"
            alt="Mouse Lighting Gamer Inalambrico Iron Man"
          />
          <div className="carousel-caption d-none d-md-block">
            {/* <h5>Mouse Lighting Gamer Inalambrico Iron Man / 1600DPI</h5>
            <p>Precisión y estilo en un solo dispositivo.</p> */}
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="/images/DIADEMA1.png"
            className="d-block w-100"
            alt="Diadema Gamer Inalámbrica Logitech G535 LIGHTSPEED"
          />
          <div className="carousel-caption d-none d-md-block">
            {/* <h5>Diadema Gamer Inalámbrica Logitech G535 LIGHTSPEED</h5>
            <p>Sonido envolvente y comodidad para largas sesiones de juego.</p> */}
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
    </div>
  );
};

export default Carusel;