import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { registerUser } from '../services/itemServices';

const Registro = () => {
  const [form, setForm] = useState({
    nombreUsuario: '',
    email: '',
    clave: '',
    esAdmin: false, // Campo para indicar si es administrador
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validaciones locales
    if (!form.nombreUsuario || !form.email || !form.clave) {
      setError('Todos los campos son obligatorios.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setError('El correo electrónico no es válido.');
      return;
    }

    try {
      await registerUser(form);
      Swal.fire({
        icon: 'success',
        title: 'Registro Exitoso',
        text: 'Tu registro se ha realizado con éxito.',
      }).then(() => {
        navigate('/login'); // Redirigir al login tras registro exitoso
      });
    } catch (err) {
      setError(err.message || 'Error al registrar el usuario.');
      Swal.fire({
        icon: 'error',
        title: 'Error de datos',
        text: error,
      });
    }
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  return (
    <div className="container col-md-4 mb-4 text-white py-5">
      <h2>Registro</h2>
      {error && <p className="error text-danger">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nombreUsuario" className="form-label">Nombre de usuario</label>
          <input
            name="nombreUsuario"
            type="text"
            className="form-control"
            placeholder="Tu nombre de usuario"
            id="nombreUsuario"
            value={form.nombreUsuario}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Correo electrónico</label>
          <input
            name="email"
            type="email"
            className="form-control"
            placeholder="Tu correo electrónico"
            id="email"
            value={form.email}
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
        <div className="mb-3 form-check">
          <input
            name="esAdmin"
            type="checkbox"
            className="form-check-input"
            id="esAdmin"
            checked={form.esAdmin}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="esAdmin">
            ¿Eres administrador?
          </label>
        </div>
        <button type="submit" className="btn btn-primary">Registrar</button>
      </form>
      <div className="mt-3">
        <p>
          ¿Ya tienes una cuenta?{' '}
          <Link to="/login" className="text-warning">Inicia sesión</Link>
        </p>
      </div>
    </div>
  );
};

export default Registro;
