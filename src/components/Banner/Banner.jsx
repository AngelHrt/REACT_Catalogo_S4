import React from 'react';
import '../../Styles/Banner.css';

const Banner = () => {
  return (
    <section className="banner">
      <div className="titulo">
        <h1>Vístete con estilo</h1>
        <p>
          Descubre nuestra selección exclusiva de ropa que combina calidad y moda. Desde lo casual hasta lo elegante, encuentra prendas que reflejen tu personalidad y marquen tendencia.
        </p>
        <a href="#" className="btn-1">Explorar colección</a>
      </div>
    </section>
  );
};

export default Banner;
