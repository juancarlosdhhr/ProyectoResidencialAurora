import './Header.css';

const Header = () => {
  document.getElementById('header').innerHTML = `
    <nav class="nav">
      <a href="/">
        <img src="assets/logo.jpg" alt="Logo Luxury Home" class="logo">
      </a>

      <div class="menu-toggle" id="menuToggle">
        <i class="fa-solid fa-bars"></i>
      </div>

      <ul class="nav-links" id="navLinks">
        <li><a href="#residences">Viviendas</a></li>
        <li><a href="#amenities">Servicios</a></li>
        <li><a href="#" id="phoneBtn"><i class="fa-solid fa-phone"></i></a></li>
        <li><a href="#" id="loginBtn"><i class="fa-solid fa-user"></i></a></li>
      </ul>
    </nav>
  `;

  // Toggle menu mobile
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
};

export default Header;

