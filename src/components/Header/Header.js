import '../styles/header.css';

const Header = () => {
  document.getElementById('header').innerHTML = `
    <nav class="nav">
      <h1 class="logo">Residencial Aurora</h1>
      <ul class="nav-links">
        <li><a href="#residences">Viviendas</a></li>
        <li><a href="#amenities">Servicios</a></li>
        <li><a href="#footer"><i class="fa-solid fa-phone"></i></a></li>
      </ul>
    </nav>
  `;
};

export default Header;
