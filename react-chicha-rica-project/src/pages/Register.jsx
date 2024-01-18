import React from 'react'

function Register() {
  return (
    <div>
        <main class="contacto">
            <section class="formulario">               
            <h4>Crear Cuenta</h4>
            <form action="../templates/gallery.html" class="form" method="post" id="registrationForm">
            <form action="#" method="post" id="registrationForm">
                <div class="form-group">
                <label>
                    <input class="control" id="nombre" name="nombre" placeholder="Nombre" required autocomplete="off">
                </label>
                <span id="errorNombre" class="error"></span>
                </div>               
                <div class="form-group">
                <label>
                    <input class="control" id="correo" name="correo" placeholder="Correo" required autocomplete="off">
                </label>
                <span id="errorEmail" class="error"></span>
                </div>
                <div class="form-group">
                <label>
                    <input class="control" id="password" name="password" type="password" placeholder="Contraseña" required autocomplete="off"> 
                    <section class="botons">
                    <div class="form-group ">
                        <label>
                        <button class="button" type="submit" onclick="return validateForm()">Registro</button>
                        <a class="button__register" href="./login.html" target="_self" >Iniciar Sesión</a>
                        </label>
                    </div>
                    </section>
                </label>
                <span id="errorPassword" class="error"></span>
                </div>  
            </form>
            </section>
        </main>
    </div>
  )
}

export default Register
