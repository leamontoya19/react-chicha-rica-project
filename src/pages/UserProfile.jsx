import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/UserProfile.css";

const UserProfile = ({ userId }) => {
  // Estado para almacenar la información del usuario
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/users.json");
        console.log(response);
  
        const contentType = response.headers["content-type"];
  
        if (contentType.includes("application/json")) {
          // Accede al primer elemento del arreglo de usuarios
          const userInfo = response.data[0];
          console.log(userInfo);
          setUserData(userInfo);  // Cambiado de contentType a userInfo
        } else {
          console.warn("La respuesta no es de tipo JSON");
          console.log("Contenido de la respuesta:", response.data);
          // Puedes establecer un estado para manejar este escenario o mostrar un mensaje al usuario
        }
      } catch (error) {
        console.error("Error al obtener datos del usuario:", error.message);
      }
    };
  
    fetchData();
  }, [userId]);
  



  if (!userData) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="profile-container">
      <div className="avatar-container">
        <img
          className="profile-picture"
          src="./img/cat.jpg"
          alt={`Perfil de ${userData.nombre}`}
        />
        <h1 className="profile-name">{`${userData.nombre} ${userData.apellido}`}</h1>
        <h2 className='profile-id'>{`${userData.id} ${userData.apellido}`}</h2>
      </div>
      <div className="profile-details">
        <p className="profile-email">Correo: {userData.email}</p>
        <p className="profile-password">Contraseña: {userData.contrasena}</p>
      </div>
    </div>
  );
};

export default UserProfile;
