import './Hero.css';

const Hero = () => {
  document.getElementById('hero').innerHTML = `
    <div class="hero-container">
      <img src="/assets/hero.jpg" alt="Residencial de lujo" />
      <div class="hero-text">
        <h2>Viviendas exclusivas</h2>
        <p>Diseño contemporáneo en una ubicación privilegiada</p>
        <button>Solicitar información</button>
      </div>
    </div>
  `;
};

export default Hero;
