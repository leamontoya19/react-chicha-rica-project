import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Gallery() {
  const [images, setImages] = useState([]);
  const [load, setLoad] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  axios.defaults.baseURL = '/api.json';

  const fetchData = async (param) => {
    try {
      setLoad(true);
      const result = await axios(param);
      if (Array.isArray(result.data)) {
        setImages(result.data);
      } else {
        // Manejar el caso en que result.data no es un array
        console.error("La respuesta de la API no es un array:", result.data);
      }
      
    } catch (err) {
      setError(err);
    } finally {
      setLoad(false);
    }
  };

  useEffect(() => {
    // const param = '/your-api-endpoint';  // Replace with your actual API endpoint
    const param = '/api.json/images';  // Reemplaza '/images' con la ruta correcta de tus datos

    fetchData(param);
  }, []);  // Empty dependency array means this effect runs once when the component mounts

  return (
    <main className="gallerycontainer">
      {/* ... rest of your code ... */}
      <div className="galleryfotos">
        {images.map((image) => (
          <div key={image.id} className="galleryfoto">
            <img src={image.url} alt={image.title} />
            <div className="gallery__info">
              <h3>{image.title}</h3>
              <p>Price: {image.price}</p>
              {/* Otras informaciones relevantes... */}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Gallery;