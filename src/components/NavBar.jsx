const NavBar= () => {
  return (
    <div className="navegacion">
      <div className="btn-group shadow-0" role="group">
        <button type="button" className="btn btn-link">Catálogo</button>
        <button type="button" className="btn btn-link">Noticias</button>
        <button type="button" className="btn btn-link">Contacto</button>
        <div className="input-group input-group-sm ms-2">
          <input type="search" id="search-input" className="form-control form-control-sm" placeholder="Buscar" aria-label="Buscar" />
          <button className="btn btn-primary btn-sm" type="button">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
