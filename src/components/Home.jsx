import React from 'react';
import Headers from './Headers';
import NavBar from './NavBar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

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
        <Outlet /> {/* Aquí va el contenido de la aplicación */}
      </div>
      <section className="juegos-del-momento">
        <h2>Videojuegos del Momento en PC</h2>
        <div className="juegos-lista">
          <div className="juego">
            <img src="/images/ciber.jpg" alt="Cyberpunk 2077" />
            <h3>Cyberpunk 2077</h3>
            <p>Un RPG de mundo abierto ambientado en una metrópolis futurista. Explora Night City y vive aventuras épicas.</p>
            <button className="button" onClick={() => window.location.href='https://store.steampowered.com/app/1091500/Cyberpunk_2077/'}>
              <svg className="svgIcon" viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path>
              </svg>
              Explorar
            </button>
          </div>
          <div className="juego">
            <img src="/images/elden.jpg" alt="Elden Ring" />
            <h3>Elden Ring</h3>
            <p>Un juego de rol de acción desarrollado por FromSoftware. Explora un vasto mundo lleno de desafíos y secretos.</p>
            <button className="button" onClick={() => window.location.href='https://store.steampowered.com/app/1245620/ELDEN_RING/'}>
              <svg className="svgIcon" viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path>
              </svg>
              Explorar
            </button>
          </div>
          <div className="juego">
            <img src="/images/valorant.jpg" alt="Valorant" />
            <h3>Valorant</h3>
            <p>Un shooter táctico en primera persona desarrollado por Riot Games. Compite en intensas partidas 5v5.</p>
            <button className="button" onClick={() => window.location.href='https://store.epicgames.com/es-ES/p/valorant'}>
              <svg className="svgIcon" viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path>
              </svg>
              Explorar
            </button>
          </div>
        </div>
      </section>
      <section className="blog-section">
            <div className="container">
                <h2 className="mb-4">Ventajas de Jugar en PC</h2>
                <p className="lead">Jugar en PC ofrece una serie de ventajas que no siempre están disponibles en otras plataformas. Desde gráficos superiores hasta una mayor personalización, aquí te contamos algunas de las principales ventajas:</p>
                <ul className="list-unstyled">
                    <li className="media mb-4">
                        <img src="/images/graphic-card.png" className="mr-3" alt="Gráficos Superiores"/>
                        <div className="media-body">
                            <h5 className="mt-0 mb-1"><strong>Gráficos Superiores:</strong></h5>
                            Los PCs pueden ofrecer gráficos de alta calidad que superan a las consolas.
                        </div>
                    </li>
                    <li className="media mb-4">
                        <img src="/images/pcpart.png" className="mr-3" alt="Personalización"/>
                        <div className="media-body">
                            <h5 className="mt-0 mb-1"><strong>Personalización:</strong></h5>
                            Puedes personalizar tu PC con diferentes componentes para mejorar el rendimiento.
                        </div>
                    </li>
                    <li className="media mb-4">
                        <img src="/images/mod.png" className="mr-3" alt="Modding"/>
                        <div className="media-body">
                            <h5 className="mt-0 mb-1"><strong>Modding:</strong></h5>
                            La comunidad de PC tiene acceso a mods que pueden mejorar y extender la vida útil de los juegos.
                        </div>
                    </li>
                    <li className="media mb-4">
                        <img src="/images/puzzle.png" className="mr-3" alt="Compatibilidad"/>
                        <div className="media-body">
                            <h5 className="mt-0 mb-1"><strong>Compatibilidad:</strong></h5>
                            Los PCs son compatibles con una amplia gama de periféricos y accesorios.
                        </div>
                    </li>
                </ul>
                <h3 className="mt-5 mb-4">Recomendaciones para Armar un PC</h3>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card mb-4">
                            <div className="card-body">
                                <h4 className="card-title">Competitivo</h4>
                                <ul className="list-unstyled">
                                    <li>Procesador: Intel Core i9 o AMD Ryzen 9</li>
                                    <li>Tarjeta Gráfica: NVIDIA RTX 3080 o AMD Radeon RX 6800 XT</li>
                                    <li>RAM: 32GB DDR4</li>
                                    <li>Almacenamiento: SSD NVMe de 1TB</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-4">
                            <div className="card-body">
                                <h4 className="card-title">Gamer Casual</h4>
                                <ul className="list-unstyled">
                                    <li>Procesador: Intel Core i5 o AMD Ryzen 5</li>
                                    <li>Tarjeta Gráfica: NVIDIA GTX 1660 Super o AMD Radeon RX 5600 XT</li>
                                    <li>RAM: 16GB DDR4</li>
                                    <li>Almacenamiento: SSD de 512GB</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-4">
                            <div className="card-body">
                                <h4 className="card-title">Esporádico</h4>
                                <ul className="list-unstyled">
                                    <li>Procesador: Intel Core i3 o AMD Ryzen 3</li>
                                    <li>Tarjeta Gráfica: NVIDIA GTX 1050 Ti o AMD Radeon RX 570</li>
                                    <li>RAM: 8GB DDR4</li>
                                    <li>Almacenamiento: SSD de 256GB</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      <Footer />
    </>
  );
};

export default Home;
