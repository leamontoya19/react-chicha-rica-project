// About.jsx
import React from 'react';
import '../styles/About.css'
import miguelImg from '../../public/img/seeking-light.jpg'

const About = () => {
  return (
    <main className="about__container">
      <figure className="about__figure">
          <img className="about__img" src={miguelImg} alt="imagen-autor" />
      </figure>
      <article className="about__article">
          <h2 className="about__title">MIGUEL MEIXOEIRO</h2>
          <div className="about__description">
              Se realizan sesiones fotográficas en estudio y exterior. Se editan y retocan fotografías. Capturo imágenes que comuniquen o transmitan una idea o personalidad. Esto aplica tanto para la fotografía de personas, como de productos, paisajes o mascotas. Se decía que las fotos robaban el alma y es por su capacidad de mostrar la esencia de lo fotografiado. CONTACTA CONMIGO por los distintos medios.
          </div>
            
      </article>             
        
            
    </main>
  );
};

export default About;

  