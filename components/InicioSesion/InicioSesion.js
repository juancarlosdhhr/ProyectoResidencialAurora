import './InicioSesion.css';

const InicioSesion = () => {
  // Crear modal
  const modal = document.createElement('div');
  modal.classList.add('inicio-sesion-modal'); // oculto por defecto

  modal.innerHTML = `
    <div class="login-container">
      <span class="close-btn">&times;</span>
      <h2>Iniciar sesión</h2>
      <form id="loginForm">
        <label for="email">Correo electrónico</label>
        <input type="email" id="email" name="email" required placeholder="Introduce tu correo" />
        <label for="password">Contraseña</label>
        <input type="password" id="password" name="password" required placeholder="Introduce tu contraseña" />
        <button type="submit" class="login-button">Iniciar sesión</button>
      </form>
      <p class="forgot-password"><a href="#">¿Olvidaste tu contraseña?</a></p>
    </div>
  `;

  document.body.appendChild(modal);

  // Abrir modal
  const loginBtn = document.getElementById('loginBtn');
  loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('active');
  });

  // Cerrar modal
  modal.querySelector('.close-btn').addEventListener('click', () => {
    modal.classList.remove('active');
  });

  // Evento submit
  document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Iniciando sesión...');
    modal.classList.remove('active'); // cerrar al enviar
  });
};

export default InicioSesion;
