import React from "react";
import { Link } from "react-router-dom";
import { Dropdown, DropdownButton } from "react-bootstrap"
const NavBar = () => {
  return (
    <>
      <div className="navegacion">
        <div className="btn-group shadow-0" role="group">
          <button type="button" className="btn btn-link">
            <Link to="/" className="nav-link text-decoration-none">Home</Link>
          </button>
          <DropdownButton id="dropdown-basic-button" title="Categorias">
            <Dropdown.Item as={Link} to="/Categorias/Cpu">Cpu</Dropdown.Item>
            <Dropdown.Item as={Link} to="/Categorias/Case">Case</Dropdown.Item>
            <Dropdown.Item as={Link} to="/Categorias/TarjetasVideo">Tarjetas de Video</Dropdown.Item>
            <Dropdown.Item as={Link} to="/Categorias/Diademas">Diademas</Dropdown.Item>
            <Dropdown.Item as={Link} to="/Categorias/Monitores">Monitores</Dropdown.Item>
            <Dropdown.Item as={Link} to="/Categorias/Mouses">Mouses</Dropdown.Item>
          </DropdownButton>
          <button type="button" className="btn btn-link">
            Noticias
          </button>
          <div className="input-group input-group-sm ms-2">
            <input
              type="search"
              id="search-input"
              className="form-control form-control-sm"
              placeholder="Buscar"
              aria-label="Buscar"
              />
            <button className="btn btn-primary btn-sm" type="button">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
