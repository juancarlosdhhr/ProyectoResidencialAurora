import './Footer.css';

const Footer = () => {
  document.getElementById('footer').innerHTML = `
    <div class="footer">
      <p>&copy; 2026 Residencial Aurora</p>
      <div class="social">
        <a href="#"><i class="fa-brands fa-instagram"></i></a>
        <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
        <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
      </div>
    </div>
  `;
};

export default Footer;
