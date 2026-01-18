import './Header.css';

const Header = () => {
  document.getElementById('header').innerHTML = `
    <nav class="nav">
      <img src="assets/logo.jpg" alt="Logo Luxury Home" class="logo">
      <ul class="nav-links">
        <li><a href="#residences">Viviendas</a></li>
        <li><a href="#amenities">Servicios</a></li>
        <li><a href="#footer"><i class="fa-solid fa-phone"></i></a></li>
      </ul>
    </nav>
  `;
};

export default Header;
