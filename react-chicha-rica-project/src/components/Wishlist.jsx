
import Header from './Header'

import React, { useState } from 'react';
//import '../styles/Wishlist.css'; // "./" es para buscar archivos en la misma carpeta y punto; y ""../" es para traerlo de otra carpeta"
// import '../styles/Wishlist.css'
import '../styles/wishlist.css'


export const Wishlist = () => {
    const [wishlist, setWishlist] = useState([]); //crea una variable de estado llamada wishlist y una función para actualizar esa variable. Esto permite almacenar y modificar una lista de deseos en el componente

    const addToWishlist = (productId) => {
        if (!wishlist.includes(productId)) { //la función verifica si el producto no está incluido en la funciçon de flecha wishlist, a través del método 'includes'. 
            setWishlist([...wishlist, productId]);
        }
    }; //Y si no está incluido elobjeto en la función de flecha wishlist, entonces lo añade usando el operador de propagación. Básicamente, la  función añade el id del producto a una wishlist array si no está ya presente.

    const removeFromWishlist = (productId) => {
        setWishlist(wishlist.filter((id) => id !== productoId));//la función emplea el método filter en el array wishlist para crear un nuevo array que excluye el productId que se pasa como argumento esto se logra empleando una función de flecha (id) => id !== productId como argumento para el método filter. Luego, la función setWishist se llama con el nuevo array filtrado para actualizar el estado o la variable que contiene la lista de favoritos.
    }

    return (
        <div className="wishlist-container">
            <h2>Wishlist</h2>
            <ul>
                {wishlist.map((productId) => (
                    <li key={productId}>
                        Producto {productoId}{' '}
                        <button onClick={() => removeFromWishlist(productId)}>Quitar de la Wishlist</button>
                    </li>
                ))}
            </ul>
            <div>
                <p>Productos de la e-commerce:</p>
                {[1, 2, 3, 4, 5].map((productId) => (
                    <button key={productId} onClick={() => addToWishlist(productId)}>
                        Añadir producto {productId} a la Wishlist
                    </button>
                ))}

            </div>
        </div>
    );
    //El código utiliza JSX, una sintaxis de JavaScript que permite escribir código HTML-like dentro de JavaScript.
    //Los elementos de lista se generan utilizando el método map en el array wishlist. Por cada elemento productId en el array wishlist, se crea un elemento de lista <li> con un botón "Quitar de la Wishlist". El productId se muestra en el texto del elemento de lista
    //Cada botón "Quitar de la Wishlist" tiene un evento onClick que llama a la función removeFromWishlist pasando el productId correspondiente como argumento.
    //Después de la lista de deseos, hay otro elemento <div> que contiene un párrafo y una serie de botones generados utilizando el método map en un array [1, 2, 3, 4, 5].
    //Cada botón generado tiene un evento onClick que llama a la función addToWishlist pasando el productId correspondiente como argumento.

};




/*const App = () => { //esta estructura básica de componente funcional de REact se crea con el snipped 'rafce'
  return (
    <>
      <Header/>
      <Wishlist/>
    </>
  );
};*/

//export default Wishlist;
//El código finaliza con la etiqueta export default Wishlist;, lo que indica que este fragmento de código representa un componente llamado "Wishlist" que se puede exportar para su uso en otros lugares de la aplicación









