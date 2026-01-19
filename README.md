# Residencial Aurora – Web Premium

Proyecto web de una promoción inmobiliaria de lujo.

## Tecnologías usadas

- HTML5 semántico
- CSS3 + animaciones 
- JS Vanilla moderno (módulos ES6)
- Vite como bundler
- Google Fonts: Playfair Display + Inter
- Font Awesome para iconos
- Responsive real (desktop & mobile)
- Sin frameworks ni librerías externas

## Estructura del proyecto

PROYECTORESIDENCIAL/
├── public/                  # Archivos estáticos servidos directamente
│   └── assets/              # Imágenes y recursos visuales
│       ├── favicon.png
│       ├── hero.jpg
│       ├── logo.jpg
│       ├── residence1.jpg
│       ├── residence2.jpg
│       └── residence3.jpg
├── components/              # Componentes modulares de la interfaz
│   ├── Amenities/
│   │   ├── Amenities.css
│   │   └── Amenities.js
│   ├── Contacto/
│   │   ├── Contacto.css
│   │   └── Contacto.js
│   ├── Footer/
│   │   ├── Footer.css
│   │   └── Footer.js
│   ├── Header/
│   │   ├── Header.css
│   │   └── Header.js
│   ├── Hero/
│   │   ├── Hero.css
│   │   └── Hero.js
│   ├── InicioSesion/
│   │   ├── InicioSesion.css
│   │   └── InicioSesion.js
│   └── Residences/
│       ├── Residences.css
│       └── Residences.js
├── node_modules/            # Dependencias instaladas (Vite, etc.)
├── .gitignore               # Archivos excluidos de Git
├── index.html               # Punto de entrada principal HTML
├── main.js                  # Orquestador: importa y ejecuta los componentes
├── package.json             # Configuración del proyecto y scripts
├── package-lock.json        # Registro detallado de dependencias
├── README.md                # Documentación del proyecto
└── style.css                # Estilos globales de la aplicación