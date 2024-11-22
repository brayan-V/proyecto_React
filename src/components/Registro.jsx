import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const Registro = () => {
const [form, setForm] = useState({nombreUsuario: "", email: "", clave: ""})
const navegacion = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/registro', {nombreUsuario: form.nombreUsuario, email: form.email, clave: form.clave});
      Swal.fire({
        icon: 'success',
        title: 'Registro Exitoso',
        text: 'Tu registro se ha realizado con éxito'
    }).then( () =>{ navegacion("/login")})
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error de datos',
        text: error.response?.data?.error
    })
    }
    setForm({nombreUsuario: "", email: "", clave: ""});
  };

  const handleChange =  (event) =>{
    setForm({...form, [event.target.name]: event.target.value});
  };


  return (
    <div className="container container col-md-4 mb-4 text-white py-5">
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre de usuario</label>
          <input name="nombreUsuario"
            type="text"
            className="form-control"
            placeholder="Nombre de usuario"
            id="nombre"
            value={form.nombreUsuario}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Correo electrónico</label>
          <input name="email"
            type="email"
            className="form-control"
            placeholder="correo electrónico"
            id="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="clave" className="form-label">Contraseña</label>
          <input name="clave"
            type="password"
            className="form-control"
            placeholder="Contraseña"
            id="clave"
            value={form.clave}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Registrar</button>
      </form>
      <div className = "mt-3">
        <p>Ya tienes una cuenta? <Link to="/login" className="text-warning">Inicia sesión</Link></p>
      </div>
    </div>
  );
};

export default Registro;