import React, { useState } from 'react';
import '../styles/Access.css';

const Access = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    password: '',
  });

  const [nombreError, setNombreError] = useState('');

  const validarFormulario = () => {
    const { nombre, email, password } = formData;

    // Validación de nombre
    const nombreRegExp = /^[A-Z][a-z]+ [A-Z][a-z]+$/;
    if (!nombreRegExp.test(nombre)) {
      setNombreError('Por favor, ingresa un nombre válido.');
      return;
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  

    // Limpiar el error si el nombre es válido
    setNombreError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Puedes realizar acciones adicionales aquí antes de enviar los datos
    console.log(formData);
  };

  return (
    <section className="formulario">
      <h4>Crear Cuenta</h4>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className='form-field'>
            <input
              name="nombre"
              className="control"
              type="text"
              placeholder="Nombre"
              value={formData.nombre}
              onChange={handleInputChange}
              required
              autoComplete='off'
            />
            {nombreError && (
            <span className="error-message">{nombreError}</span>
          )}
          </label>
          
        </div>
        <div className="form-group">
          <label className='form-field'>
            <input
              name="email"
              className="control"
              type="text"
              placeholder="Correo"
              value={formData.email}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label className='form-field'>
            <input
              name="password"
              className="control"
              type="password"
              placeholder="Contraseña"
              value={formData.password}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <section className="botons">
          <div className="center">
            <button className="button" type="submit" onClick={validarFormulario}>
              Registro
            </button>
          </div>
          <div className="center">
            <button className="button">Iniciar sesión</button>
          </div>
        </section>
      </form>
    </section>
  );
};

export default Access;
