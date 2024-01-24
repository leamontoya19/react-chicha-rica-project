import { useState } from 'react';
import '../App.css';
import '../styles/Access.css';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';

//Estilos modal agradecimiento
const customStyles = {
  content: {
    backgroundColor: '#fefefe',
    margin: 'auto',
    top: '50%',
    transform: 'translateY(-50%)',
    padding: '70px',
    border: 'none',
    borderRadius: '5px',
    width: '26%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    height: '25vh'
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  }
};

const Access = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [errores, setErrores] = useState({});
  const [modalAbierto, setModalAbierto] = useState(false);
  const navigate = useNavigate();
  const onChange = () => {
    console.log('hola')
  } 


  const nombreRegex = /^[A-Z][a-z]+$/;

  const handleSubmit = (e) => {
    e.preventDefault();

    const erroresValidacion = {};

    if (!nombre.trim()) {
      erroresValidacion.nombre = 'El nombre es obligatorio';
    } else if (!nombreRegex.test(nombre)) {
      erroresValidacion.nombre = 'El nombre debe incluir la primera letra en mayúscula';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      erroresValidacion.email = 'Ingresa un correo electrónico válido';
    }

    if (contrasena.length < 6) {
      erroresValidacion.contrasena = 'La contraseña debe tener al menos 6 caracteres';
    }

    if (Object.keys(erroresValidacion).length > 0) {
      setErrores(erroresValidacion);
    } else {
      // Aquí puedes manejar la lógica para enviar los datos
      console.log('Datos enviados:', { nombre, email, contrasena });

      setModalAbierto(true);
      setErrores({});
    }
  };

  const closeModal = () => {
    //Cerrar el modal y se borran los errores
    setModalAbierto(false);
    setErrores({});
  };

  const redirectToGallery = () => {
    navigate('/gallery');
  };

  const redirectToLogin = () => {
    navigate('/login');
  };

  return (
    <main className='formulario-container'>
      <section className="formulario">
      <h4>Crear Cuenta</h4>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className='form-field' htmlFor='nombre'>
            <input
              name="nombre"
              className="control"
              type="text"
              placeholder="Nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
              autoComplete='off'
            />
            {errores.nombre && <span>{errores.nombre}</span>}
          </label>
        </div>
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
            {errores.email && <span>{errores.email}</span>}
          </label>
        </div>
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
            {errores.contrasena && <span>{errores.contrasena}</span>}
          </label>
        </div>
        <div className='recaptcha'>
          
              <ReCAPTCHA
                sitekey="6LdslFgpAAAAAEvhQ8tyiVMDXbgAHj-X8bgl30SF"
                onChange={onChange}
              />
        </div>
        <section className="botons">
          <div className="center">
            <button className="button" type="submit">
              Registro
            </button>
          </div>
          <div className="center">
            <button className="button" onClick={redirectToLogin}>Iniciar sesión</button>
          </div>
        </section>
      </form>
      <Modal 
        isOpen={modalAbierto} 
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className='button_close_div'>
          <div className='button_close_icon' onClick={closeModal}>
            <FontAwesomeIcon icon={faTimes} />
          </div>
        </div>
        <div className='modal__thanks__text'>
          <h3>¡Muchas gracias por registrarte!</h3>
        </div>
        <div className='button_gallery'>
          <button className='button' onClick={redirectToGallery}>Galería</button>
        </div>
      </Modal>
    </section>
    </main>
    
  );
};

export default Access;
