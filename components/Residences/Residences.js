import './Residences.css';

const Residences = () => {
  document.getElementById('residences').innerHTML = `
    <section class="residences">
      <h2 class="section-title">Nuestras Viviendas</h2>

      <div class="residence-card">
        <img src="/src/assets/residence1.jpg" alt="Vivienda tipo A">
        <div class="residence-info">
          <h3>Vivienda Tipo A</h3>
          <p>Amplios espacios abiertos, terrazas privadas y acabados de alta gama.</p>
        </div>
      </div>

      <div class="residence-card">
        <img src="/src/assets/residence2.jpg" alt="Vivienda tipo B">
        <div class="residence-info">
          <h3>Vivienda Tipo B</h3>
          <p>Diseño contemporáneo con vistas panorámicas y máxima eficiencia energética.</p>
        </div>
      </div>
    </section>
  `;
};

export default Residences;
