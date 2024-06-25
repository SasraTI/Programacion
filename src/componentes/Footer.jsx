import React from 'react';
import './FooterStyle.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-left">
          <h3>Santiago Salazar</h3>
          <p>Lloré más de 10 veces haciendo esto</p>
          <p>Sarmiento, Banda del Río Salí, Tucumán, Argentina</p>
          <p>Teléfono: +54 9 381 664-4082</p>
          <p>Email: salazar.sntiago@gmail.com</p>
        </div>
        <div className="footer-right">
          <h3>Agradecimientos chiquitos pero importantes</h3>
          <ul>
            <li><a href="/">Stefano 👨🏻 por resolverme muchas dudas</a></li>
            <li><a href="/nosotros">Vicky 🌷 y Eve 💖 por siempre levantarme los ánimos con este proyecto</a></li>
            <li><a href="/servicios">A mi Abuela 🌹 </a></li>
            <li><a href="/contacto">Espero aprobar 🔟 ,_,</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Derechos de autor &copy; {new Date().getFullYear()}  Vivan lxs Trans 🎉. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
