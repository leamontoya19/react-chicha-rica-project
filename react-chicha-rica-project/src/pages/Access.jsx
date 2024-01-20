import React, { useState } from 'react';
import '../styles/Access.css'
import Modal from 'react-modal'; //biblioteca para modal
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; //biblioteca icono cerrar modal
import { faTimes } from '@fortawesome/free-solid-svg-icons'; //biblioteca icono cerrar modal

//?Estilos para el modal
const customStyles = {
  content: {
    backgroundColor: '#fefefe',
    margin: 'auto', //centrar horizontalmente
    top: '50%',
    transform: 'translateY(-50%)', //centrar verticalmente
    padding: '70px',
    border: 'none',
    borderRadius: '5px',
    width: '26%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center', 
   },
  overlay:{ //sombra del modal
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  }
};



const Access = () => {
  // Estados para los campos del formulario y mensajes de error
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [errores, setErrores] = useState({}); //objeto vacío para errores
  const [modalAbierto, setModalAbierto] = useState(false);

  // Expresión regular para validar el formato del nombre
  const nombreRegex = /^[A-Z][a-z]+$/;

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();


  //VALIDACIONES---------------------------
    // Validación de nombre
    const erroresValidacion = {};
    if (!nombre.trim()) { //si el campo está vacío...
      erroresValidacion.nombre = 'El nombre es obligatorio'; //salta el error
    } else if (!nombreRegex.test(nombre)) {
      erroresValidacion.nombre = //si no coincide con las regex salta nuevo error
        'El nombre debe incluir la primera letra en mayúscula';
    }

    // Validación email 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      erroresValidacion.email = 'Ingresa un email válido';
    }

    // Validación de contraseña
    if (contrasena.length < 6) {
      erroresValidacion.contrasena = 'La contraseña debe tener al menos 6 caracteres';
    }

    // Si hay errores, se actualiza el estado 'errores' y salta el mensaje correspondiente
    if (Object.keys(erroresValidacion).length > 0) {
      setErrores(erroresValidacion);
    }
      
      
    
  //MODAL---------------------------
    // Abrir el modal
      setModalAbierto(true);
    
  };

    // Función para cerrar el modal
  const closeModal = () => {
    setModalAbierto(false);
  };

  return (
    <section className="formulario">
      <h4>Crear Cuenta</h4>
      <form className="form" onSubmit={handleSubmit}>
        
        {/* Nombre */}
        <div className="form-group">
          <label className='form-field' htmlFor='nombre'>
            <input
              name="nombre"
              className="control"
              type="text"
              placeholder="Nombre"
              value={nombre} //useState nombre, cambia el estado al escribir un nuevo nombre
              onChange={(e) => setNombre(e.target.value)} //actualiza el estado nombre con el nuevo valor
              required
              autoComplete='off'
            />
            {errores.nombre && <span>{errores.nombre}</span>}
          </label>
         </div>

         {/* Email */}
        <div className="form-group">
          <label className='form-field' htmlFor='email'>
            <input
              name="email"
              className="control"
              type="text"
              placeholder="Correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete='off'
            />
          </label>
        </div>

        {/* Contraseña */}
        <div className="form-group">
          <label className='form-field' htmlFor='contrasena'>
            <input
              name="contrasena"
              className="control"
              type="password"
              placeholder="Contraseña"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
              required
              autoComplete='off'
            />
          </label>
        </div>

        {/* Botones */}
        <section className="botons">
          <div className="center">
            <button className="button" type="submit">
              Registro
            </button>
          </div>
          <div className="center">
            <button className="button">Iniciar sesión</button>
          </div>
        </section>
      </form>



      {/* Modal de agradecimiento */}
        
      <Modal 
      isOpen={modalAbierto} 
      onRequestClose={closeModal}
      style={customStyles}
      >
        <div className='button_close_div'>
          <div className='button_close_icon' onClick={closeModal}>
          <FontAwesomeIcon icon={faTimes} /> {/* Icono de "X" */}
          </div>
        </div>
       <div className='modal__thanks__text'>
        <h3>¡Muchas gracias por registrarte!</h3>
       </div>
       <div className='button_gallery'>
          <button className='button'>Galería</button>
        </div>
        
        
      </Modal>


    </section>
  );
};

export default Access;
