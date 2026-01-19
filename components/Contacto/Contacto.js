import './Contacto.css';

const Contacto = () => {
  
  const modal = document.createElement('div');
  modal.classList.add('contacto-modal'); 

  modal.innerHTML = `
    <div class="contact-container">
      <span class="close-btn">&times;</span>
      <h2>Contacta con un asesor</h2>
      <p>Luxury Home Premium</p>
      <p>Teléfono: +34 912 345 678</p>
      <form id="contactForm">
        <label for="name">Nombre:</label>
        <input type="text" id="name" name="name" required placeholder="Tu nombre">

        <label for="email">Correo electrónico:</label>
        <input type="email" id="email" name="email" required placeholder="Tu correo">

        <label for="message">Mensaje:</label>
        <textarea id="message" name="message" rows="4" placeholder="Escribe tu mensaje"></textarea>

        <button type="submit" class="contact-button">Enviar</button>
      </form>
    </div>
  `;

  document.body.appendChild(modal);

  
  const phoneBtn = document.getElementById('phoneBtn');
  phoneBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('active');
  });

 
  modal.querySelector('.close-btn').addEventListener('click', () => {
    modal.classList.remove('active');
  });

 
  document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Formulario enviado. Nuestro asesor se pondrá en contacto contigo.');
    modal.classList.remove('active'); 
  });
};

export default Contacto;
