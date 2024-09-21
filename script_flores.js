onload = () => {
  document.body.classList.remove("container");
};

function moveBee(bee, initialDelay) {
  function animateBee() {
      // Configurar la posición inicial fuera del borde izquierdo
      bee.style.left = '-200px';
      bee.style.top = Math.random() * 80 + 'vh'; // Posición vertical aleatoria

      // Asignar una duración de movimiento aleatoria entre 6 y 10 segundos
      const randomSpeed = Math.random() * 4 + 6;
      setTimeout(() => {
          bee.style.transition = `left ${randomSpeed}s linear`;
          bee.style.left = '100vw'; // Mover al borde derecho
      }, initialDelay);

      // Cuando la abeja llegue al borde derecho
      bee.addEventListener('transitionend', () => {
          // Detener la transición y posicionar de nuevo a la izquierda
          bee.style.transition = 'none'; // Quitar la transición
          bee.style.left = '-200px'; // Reiniciar fuera de la pantalla a la izquierda
          bee.style.top = Math.random() * 80 + 'vh'; // Posición vertical aleatoria

          // Asegurar que la abeja se mueve hacia la derecha nuevamente
          setTimeout(() => {
              const newSpeed = Math.random() * 4 + 6; // Nueva duración aleatoria
              bee.style.transition = `left ${newSpeed}s linear`; // Aplicar transición
              bee.style.left = '100vw'; // Mover hacia el borde derecho
          }, Math.random() * 3000); // Retardo aleatorio para reiniciar
      });
  }

  // Iniciar la animación de la abeja
  animateBee();
}

// Obtener las abejas del DOM
const bees = document.querySelectorAll('.bee');

// Iniciar cada abeja con tiempos de inicio diferentes
moveBee(bees[0], 1000); // Abeja 1 empieza al segundo 1
moveBee(bees[1], 3000); // Abeja 2 empieza al segundo 3
moveBee(bees[2], 2000); // Abeja 3 empieza al segundo 2
moveBee(bees[3], 4000); // Abeja 4 empieza al segundo 4
moveBee(bees[4], 5000); // Abeja 5 empieza al segundo 5



// Código del botón de reproducción de música
document.addEventListener("DOMContentLoaded", function () {
  const audio = document.getElementById('background-music');
  const playButton = document.getElementById('play-button');

  playButton.addEventListener('click', function() {
    audio.play();
    playButton.style.display = 'none'; // Ocultar el botón una vez que se hace clic
  });
});



