import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "../components/Modal"; // Asegúrate de importar el componente Modal
import '../styles/Gallery.css';

function Gallery() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api.json");
        const dataApi = response.data;
        console.log(dataApi);
        setImages(dataApi.data);
      } catch (error) {
        console.error("Error al obtener los datos de la API:", error);
      }
    };

    fetchData();
  }, []);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-container">
      {/* <GalleryFilter /> */}
      <div className="pictures-container">
        {Array.isArray(images) &&
          images.map((image) => (
            <div className={`${image.keyword}`} key={image.id} onClick={() => openModal(image)}>
              <div className="img-container">
                <img
                  src={`img/${image.url}`}
                  alt={image.title}
                  style={{ width: "100%" }}
                />
              </div>
              <h3>{image.title}</h3>
              <p>Price: {image.price}</p>
              {/* Otras informaciones relevantes... */}
            </div>
          ))}
      </div>

      {selectedImage && (
        <Modal
          image={selectedImage}
          onClose={closeModal}
        />
      )}
    </div>
  );
}

export default Gallery;
