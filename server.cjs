const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 3001;

// Configura el middleware CORS
app.use(cors());

app.use(express.json());

const filePath = path.join(__dirname, 'public', 'users.json');

app.use((req, res, next) => {
  console.log('Solicitud recibida:', req.body);
  next();
});

app.post('/api/register', (req, res) => {
  const { nombre, apellido, email, contrasena } = req.body;
  console.log('Datos recibidos:', { nombre, apellido, email, contrasena });

  const newUser = {
    id: uuidv4(),
    nombre,
    apellido,
    email,
    contrasena
  };

  console.log('Ruta del archivo:', filePath);

  try {
    // Lee el archivo existente
    let users = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

    // Agrega el nuevo usuario
    users.push(newUser);

    // Escribe el archivo actualizado
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
    
    const userId = newUser.id; //
    // Devuelve el ID del usuario recién registrado
    // res.json({ success: true, message: 'Usuario registrado exitosamente', userId: newUser.id });

    // Respuesta exitosa
    res.json({ success: true, message: 'Usuario registrado exitosamente', userId });
  } catch (error) {
    console.error('Error al registrar usuario:', error);

    // Manejar error interno del servidor
    res.status(500).json({ success: false, message: 'Error interno del servidor' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
