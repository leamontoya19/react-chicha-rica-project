import React, { useEffect, useState } from 'react';

function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api.json'); // La ruta es relativa a la raíz del servidor
        const data = await response.json();
        console.log(data)

        // Actualiza la propiedad img de cada objeto en data.data
        const imagesWithFullPath = data.data.map(image => {
          return {
            ...image,
            img: `/assets/img${image.url}`
          };
        });

        setImages(imagesWithFullPath);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="gallery__container">
      <div className="gallery_filter">
        <a className="gallery__buttonCategory button">
          <span className="btn-txt">CATEGORIAS</span>
        </a>
        <div className="gallery_filtersSubCategory">
          <button className="gallery__buttonSubCategory buttonSubCategory" data-keyword="personas"><a href="#">PERSONAS</a></button>
          <button className="gallery__buttonSubCategory buttonSubCategory" data-keyword="naturaleza"><a href="#">NATURALEZA</a></button>
          <button className="gallery__buttonSubCategory buttonSubCategory" data-keyword="efectos"><a href="#">EFECTOS</a></button>
          <button className="gallery__buttonSubCategory buttonSubCategory" data-keyword="arquitectura urbana"><a href="#">ARQUITECTURA URBANA</a></button>
          <button className="gallery__buttonSubCategory buttonSubCategory" data-keyword="animales"><a href="#">ANIMALES</a></button>
          <button className="gallery__buttonSubCategory buttonSubCategory" data-keyword="animales"><a href="../templates/gallery.html">TODAS</a></button>
        </div>
      </div>
      <div className="gallery__fotos">
        {images.map((image) => (
          <div key={image.id} className="gallery__foto">
            <img src={image.img} alt={image.title} />
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
