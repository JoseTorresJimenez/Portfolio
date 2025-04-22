// script.js

// 1. Crear botón para alternar tema
const themeToggle = document.createElement('button');
themeToggle.id = 'theme-toggle';
// Ícono inicial: ☀️ para indicar que al pulsar irá a modo claro
themeToggle.innerHTML = '☀️';
document.body.appendChild(themeToggle);

// 2. Función para alternar entre dark (por defecto) y light-mode
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  // Cambiar el ícono según el tema actual
  themeToggle.innerHTML = document.body.classList.contains('light-mode') ? '🌙' : '☀️';
});

// 3. Scroll reveal: muestra las secciones al hacer scroll
const sections = document.querySelectorAll('section');
function revealSections() {
  const triggerPoint = window.innerHeight * 0.8;
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < triggerPoint) {
      sec.classList.add('visible');
    }
  });
}
// Ejecutar al hacer scroll y al cargar la página
window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections);

// 4. Validación simple del formulario de contacto
const form = document.getElementById('form-contacto');
form.addEventListener('submit', e => {
  e.preventDefault();
  const nombre  = form.nombre.value.trim();
  const email   = form.email.value.trim();
  const mensaje = form.mensaje.value.trim();

  if (!nombre || !email || !mensaje) {
    alert('Por favor completa todos los campos.');
    return;
  }

  // Aquí podrías enviar los datos a un servidor...
  alert('¡Formulario enviado con éxito!');
  form.reset();
});
