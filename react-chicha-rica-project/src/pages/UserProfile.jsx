import React, { useState, useEffect } from "react";
import axios from "axios"; // Asegúrate de tener instalada la librería axios
import "../styles/UserProfile.css";

const UserProfile = () => {
  // Estado para almacenar la lista de usuarios
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/users.json");

        // Verificar el tipo de contenido antes de intentar parsear como JSON
        const contentType = response.headers["content-type"];
        if (contentType && contentType.includes("application/json")) {
          setUserList(response.data.users);
        } else {
          // Manejar la respuesta que no es JSON (puede ser un mensaje de error, HTML, etc.)
          console.warn("La respuesta no es de tipo JSON");
          console.log("Contenido de la respuesta:", response.data);
        }
      } catch (error) {
        console.error("Error al obtener datos de los usuarios:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {userList.map((user) => (
        <div key={user.id} className="profile-container">
          <div className="avatar-container">
					<img
            className="profile-picture"
            src="/img/cat.jpg"
            alt={`Perfil de ${user.name}`}
          />
            <h1 className="profile-name">{user.name}</h1>
          </div>
          <div className="profile-details">
            <p className="profile-alias">Alias: {user.alias}</p>
          </div>
          <div className="contact-info">
            <h2>Contacto:</h2>
            <p className="profile-email">Correo: {user.email}</p>
            <p className="profile-phone">Teléfono: {user.phone}</p>
          </div>
          <div className="address-info">
            <h2>Dirección:</h2>
            <p className="profile-address">{user.address}</p>
          </div>
          <div className="payment-info">
            <h2>Formas de Pago:</h2>
            <p className="profile-payment">Tarjeta de crédito: {user.creditCard}</p>
            <p className="profile-payment">PayPal: {user.paypal}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserProfile;
