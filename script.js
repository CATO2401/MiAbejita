// read custom message from query strings

const urlSearchParams = new URLSearchParams(window.location.search)

const messageCustom = urlSearchParams.get('message')

if (messageCustom) {

  const mainMessageElement = document.querySelector('#mainMessage')
  mainMessageElement.textContent = decodeURI(messageCustom)
}

// Seleccionar elementos importantes
const btnOpenElement = document.querySelector('#open');
const btnCloseElement = document.querySelector('#close');
const linkContainer = document.querySelector('#link-container'); // El contenedor del enlace

// Desactivar el botón "Cerrar" al inicio
btnCloseElement.disabled = true;

// Función para crear el enlace dinámicamente
function createLink() {
  // Si el enlace ya existe, no lo volvemos a crear
  if (linkContainer.innerHTML === '') {
    const link = document.createElement('a');
    link.href = 'multi-page-card.html';
    link.textContent = 'Haz clic aquí para ver algo especial';
    link.classList.add('redirect-link'); // Añadir clase si es necesario para estilos
    linkContainer.appendChild(link);
  }
}

// Evento para el botón "Abrir"
btnOpenElement.addEventListener('click', () => {
  btnOpenElement.disabled = true;
  btnCloseElement.disabled = false;

  // Lógica para abrir la carta
  const coverElement = document.querySelector('.cover');
  coverElement.classList.add('open-cover');

  setTimeout(() => {
    coverElement.style.zIndex = -1;

    const paperElement = document.querySelector('.paper');
    paperElement.classList.remove('close-paper');
    paperElement.classList.add('open-paper');

    const heartElement = document.querySelector('.heart');
    heartElement.style.display = 'block';

    // Crear y mostrar el enlace cuando se abra la carta
    createLink();
  }, 500);
});

// Evento para el botón "Cerrar"
btnCloseElement.addEventListener('click', () => {
  btnOpenElement.disabled = false;
  btnCloseElement.disabled = true;

  const coverElement = document.querySelector('.cover');
  const paperElement = document.querySelector('.paper');
  paperElement.classList.remove('open-paper');
  paperElement.classList.add('close-paper');

  setTimeout(() => {
    coverElement.style.zIndex = 0;
    coverElement.classList.remove('open-cover');

    const heartElement = document.querySelector('.heart');
    heartElement.style.display = 'none';

    // Puedes remover el enlace al cerrar la carta si quieres
    // linkContainer.innerHTML = ''; 
  }, 500);
});
