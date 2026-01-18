import './Amenities.css';

const Amenities = () => {
  document.getElementById('amenities').innerHTML = `
    <section class="amenities">
      <h2 class="section-title">Servicios Exclusivos</h2>

      <div class="amenities-grid">
        <div class="amenity">
          <i class="fa-solid fa-water-ladder"></i>
          <h4>Piscina Infinity</h4>
        </div>

        <div class="amenity">
          <i class="fa-solid fa-dumbbell"></i>
          <h4>Gimnasio Privado</h4>
        </div>

        <div class="amenity">
          <i class="fa-solid fa-tree"></i>
          <h4>Jardines Privados</h4>
        </div>

        <div class="amenity">
          <i class="fa-solid fa-shield-halved"></i>
          <h4>Seguridad 24h</h4>
        </div>
      </div>
    </section>
  `;
};

export default Amenities;
