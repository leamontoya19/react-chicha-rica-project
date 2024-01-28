import { useState } from 'react';
import '../App.css';
import '../styles/Access.css';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';

// Estilos modal agradecimiento
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
    height: '25vh',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
};
Modal.setAppElement('#root');

const Access = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [errores, setErrores] = useState({});
  const [modalAbierto, setModalAbierto] = useState(false);
  const [recaptchaCompleted, setRecaptchaCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const onChange = () => {
    setRecaptchaCompleted(true);
  };

  const nombreRegex = /^[A-Z][a-z]+$/;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const erroresValidacion = {};

    if (!nombre.trim()) {
      erroresValidacion.nombre = 'El nombre es obligatorio';
    } else if (!nombreRegex.test(nombre)) {
      erroresValidacion.nombre = 'El nombre debe incluir la primera letra en mayúscula';
    }

    if (!apellido.trim()) {
      erroresValidacion.apellido = 'El apellido es obligatorio';
    } else if (!nombreRegex.test(apellido)) {
      erroresValidacion.apellido = 'El apellido debe incluir la primera letra en mayúscula';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      erroresValidacion.email = 'Ingresa un correo electrónico válido';
    }

    if (contrasena.length < 6) {
      erroresValidacion.contrasena = 'La contraseña debe tener al menos 6 caracteres';
    }

    if (!recaptchaCompleted) {
      erroresValidacion.recaptcha = 'Completa el reCAPTCHA antes de registrarte.';
    }

    if (Object.keys(erroresValidacion).length > 0) {
      setErrores(erroresValidacion);
    } else {
      setIsLoading(true);

      try {
        const response = await fetch('http://localhost:3001/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ nombre, apellido, email, contrasena }),
        });

        if (response.ok) {
          const responseData = await response.json();
          const { userId } = responseData;

          setModalAbierto(true);
          setErrores({});

          // Redirigir al perfil del usuario con el ID
          navigate(`/user-profile/${userId}`);
        } else {
          console.error('Error en la respuesta del servidor:', response);
        }
      } catch (error) {
        console.error('Error al hacer la solicitud de registro:', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const closeModal = () => {
    // Cerrar el modal y se borran los errores
    setModalAbierto(false);
    setErrores({});
  };

  const redirectToGallery = () => {
    navigate('/gallery');
  };

  const redirectToLogin = () => {
    navigate('/login');
  };

  const redirectToTerms = () => {
    navigate('/terms')
  }

  return (
    <main className="formulario-container">
      <section className="formulario">
        <h4>Crear Cuenta</h4>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-field" htmlFor="nombre">
              <input
                name="nombre"
                className="control"
                type="text"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
                autoComplete="off"
              />
              {errores.nombre && <span>{errores.nombre}</span>}
            </label>
          </div>
          <div className="form-group">
            <label className="form-field" htmlFor="apellido">
              <input
                name="apellido"
                className="control"
                type="text"
                placeholder="Apellido"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
                required
                autoComplete="off"
              />
              {errores.apellido && <span>{errores.apellido}</span>}
            </label>
          </div>
          <div className="form-group">
            <label className="form-field" htmlFor="email">
              <input
                name="email"
                className="control"
                type="text"
                placeholder="Correo"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="off"
              />
              {errores.email && <span>{errores.email}</span>}
            </label>
          </div>
          <div className="form-group">
            <label className="form-field" htmlFor="contrasena">
              <input
                name="contrasena"
                className="control"
                type="password"
                placeholder="Contraseña"
                value={contrasena}
                onChange={(e) => setContrasena(e.target.value)}
                required
                autoComplete="off"
              />
              {errores.contrasena && <span>{errores.contrasena}</span>}
            </label>
          </div>

          <div className="form-group">
            <label>
              <input type="checkbox" required />
              Acepto los{' '}
              <a className="terms-link" onClick={redirectToTerms}>
                términos y condiciones
              </a>
            </label>
          </div>

          <div className="recaptcha">
            <ReCAPTCHA
              sitekey="6LdslFgpAAAAAEvhQ8tyiVMDXbgAHj-X8bgl30SF"
              onChange={onChange}
              className="captcha"
              theme="dark"
              required
            />
            {errores.recaptcha && <span>{errores.recaptcha}</span>}
          </div>

          <section className="botons">
            <div className="center">
              <button className="button__gallery" type="submit" disabled={isLoading}>
                {isLoading ? 'Registrando...' : 'Registro'}
              </button>
            </div>
            <div className="center">
              <button className="button__gallery" onClick={redirectToLogin}>
                Iniciar sesión
              </button>
            </div>
          </section>
        </form>

        <Modal isOpen={modalAbierto} onRequestClose={closeModal} style={customStyles}>
          <div className="button_close_div">
            <div className="button_close_icon" onClick={closeModal}>
              <FontAwesomeIcon icon={faTimes} />
            </div>
          </div>
          <div className="modal__thanks__text">
            <h3>¡Muchas gracias por registrarte, {nombre} {apellido}!</h3>
          </div>
          <div className="div_button_gallery">
            <button className="button__gallery" onClick={redirectToGallery}>
              Galería
            </button>
          </div>
        </Modal>
      </section>
    </main>
  );
};

export default Access;
