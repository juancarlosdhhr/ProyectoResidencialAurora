import './Residences.css';

import res1 from './assets/residence1.jpg';
import res2 from './assets/residence2.jpg';
import res3 from './assets/residence3.jpg';

const Residences = () => {
  document.getElementById('residences').innerHTML = `
    <section class="residences">
      <h2 class="section-title">Nuestras Viviendas</h2>

      <div class="residence-card">
  <div class="residence-image">
    <img src="assets/residence1.jpg" alt="Vivienda tipo A">
  </div>
  <div class="residence-info">
    
    <p>Arquitectura vanguardista, espacios abiertos y acabados de alta calidad.</p>
  </div>
</div>
      
     <div class="residence-card">
  <div class="residence-image">
    <img src="assets/residence2.jpg" alt="Vivienda tipo A">
  </div>
  <div class="residence-info">
   
    <p>Líneas minimalistas, tecnología avanzada y eficiencia energética.</p>
  </div>
</div>


      <div class="residence-card">
  <div class="residence-image">
    <img src="assets/residence3.jpg" alt="Vivienda tipo A">
  </div>
  <div class="residence-info">
    
    <p>Diseño contemporáneo con terrazas integradas y máxima luminosidad.
  </div>
</div>
  `;
};

export default Residences;
