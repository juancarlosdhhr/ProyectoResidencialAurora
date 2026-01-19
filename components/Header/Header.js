import './Header.css';

const Header = () => {
  document.getElementById('header').innerHTML = `
    <nav class="nav">
     <a href="/">
  <img src="assets/logo.jpg" alt="Logo Luxury Home" class="logo">
</a>

      <ul class="nav-links">
        <li><a href="#residences">Viviendas</a></li>
        <li><a href="#amenities">Servicios</a></li>
       <li><a href="#" id="phoneBtn"><i class="fa-solid fa-phone"></i></a></li>
        <li><a href="#" id="loginBtn"><i class="fa-solid fa-user"></i></a></li>

      </ul>
    </nav>
  `;
};

export default Header;
