import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { loginUser } from '../services/itemServices';

const Login = ({ setUser }) => {
  const [form, setForm] = useState({ nombreUsuario: '', clave: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { token, usuario } = await loginUser(form);
      localStorage.setItem('token', token);
      setUser(usuario);

      Swal.fire({
        icon: 'success',
        title: 'Inicio de Sesión Exitoso',
        text: `Bienvenido de nuevo, ${usuario.nombreUsuario}`,
      });

      // Redirigir según el rol
      if (usuario.esAdmin) {
        navigate('/dashboard');
      } else {
        navigate('/');
      }
    } catch (err) {
      setError(err.message || 'Error al iniciar sesión.');
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error,
      });
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="container col-md-4 mb-4 text-white py-5">
      <h2>Iniciar Sesión</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre de usuario</label>
          <input
            name="nombreUsuario"
            type="text"
            className="form-control"
            placeholder="Tu nombre de usuario"
            id="nombre"
            value={form.nombreUsuario}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="clave" className="form-label">Contraseña</label>
          <input
            name="clave"
            type="password"
            className="form-control"
            placeholder="Tu contraseña"
            id="clave"
            value={form.clave}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default Login;
