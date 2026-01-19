import './Hero.css';

const Hero = () => {
  document.getElementById('hero').innerHTML = `
    <div class="hero-container">
      <img src="/assets/hero.jpg" alt="Residencial de lujo" />
      <div class="hero-text">
        <h2>Viviendas exclusivas</h2>
        <p>Diseño contemporáneo en una ubicación privilegiada</p>
        <button id="infoBtn">Solicitar información</button>
      </div>
    </div>
  `;

  const infoBtn = document.getElementById('infoBtn');

  infoBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const contactoModal = document.querySelector('.contacto-modal');
    if (contactoModal) {
      contactoModal.classList.add('active');
    }
  });
};

export default Hero;

