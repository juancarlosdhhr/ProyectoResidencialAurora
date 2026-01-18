import './Residences.css';

const Residences = () => {
  document.getElementById('residences').innerHTML = `
    <section class="residences">
      <h2 class="section-title">Nuestras Viviendas</h2>

      <div class="residence-card">
        <img src="assets/residence1.jpg" alt="Vivienda tipo A">
        <div class="residence-info">
          <h3>Modelo Salamanca</h3>
          <p>Amplios espacios abiertos, terrazas privadas y acabados de alta gama.</p>
        </div>
      </div>

      
      <div class="residence-card">
        <img src="assets/residence2.jpg" alt="Vivienda tipo B">
        <div class="residence-info">
          <h3>Modelo Lugo</h3>
          <p>Amplios espacios abiertos, terrazas privadas y acabados de alta gama.</p>
        </div>
      </div>


      <div class="residence-card">
        <img src="assets/residence3.jpg" alt="Vivienda tipo C">
        <div class="residence-info">
          <h3>Modelo Tiana</h3>
          <p>Diseño contemporáneo con vistas panorámicas y máxima eficiencia energética.</p>
        </div>
      </div>
    </section>
  `;
};

export default Residences;
