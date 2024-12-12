import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const Login = () => {
  const [form, setForm] = useState({nombreUsuario: "", clave:""})
  const navegacion = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', form);
      localStorage.setItem('token', response.data.token);
      Swal.fire({
        icon: 'success',
        title: 'Inicio de Sesion Exitoso',
        text: `Bienvenido de nuevo  ${form.nombreUsuario}`
    }).then( () => {
      navegacion('/');
    })
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error de datos',
        text: 'Error al iniciar sesión: ' + error.response.data.error
    })
    }
    setForm({nombreUsuario: "", clave:""});
  };

  const handleChange =  (event) =>{
    setForm({...form, [event.target.name]: event.target.value});
  };

  return (
    <div className="container col-md-4 mb-4 text-white py-5">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre de usuario</label>
          <input name = "nombreUsuario"
            type="text"
            className="form-control"
            placeholder="Tu nombre de usuario"
            id="nombre"
            value={setForm.nombreUsuario}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="clave" className="form-label">Contraseña</label>
          <input name = "clave"
            type="password"
            className="form-control"
            placeholder="Tu contraseña"
            id="clave"
            value={setForm.clave}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
      </form>
      <div className = "mt-3">
        <p>¿Aún no tienes una cuenta? <Link to="/registro" className="text-warning">Regístrate</Link></p>
      </div>
    </div>
  );
};

export default Login;