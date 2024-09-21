$(document).ready(function() {
    const pages = [
      `<h2>Para mi abejita</h2><p>Mi corazon hermoso... En este dia tan especial quiero recordarte lo feliz que me haces, desde que llegaste a mi vida te has convertido en lo más importante para mi. Me haces muy pero muy especial mi amorcito bello y te lo agradezco con todo mi corazón ❤️</p>`,
      `<p>Gracias por ser tan paciente y por ser tan dedicada con nuestra relación, sé que soy alguien difícil de querer o bueno inicialmente solía serlo, no quise dañarte de la forma tan horrible en la que lo hice y es con algo que siempre voy a cargar 😭.... Me haré cargo de todo el daño que hice y te cambiaré toda esa tristeza por felicidad, te lo prometo mi amor ❤️, peleare contra todo pronóstico por ti mi amada.</p>`,
      `<p>Tu amor y compañía me llenan y me dan la fuerza necesaria para seguir luchando 💪🏻. Quiero todo contigo mi amor!!!! Todo es todo carajo, no quiero a nadie más, si no eres tú no quieor nada, aunque te vayas al otro lado del mundo haré lo posible por ir allá.... quiero que seas egoísta y me quieras solo a mi carajo...</p>`,
      `<p>Mientras "dormía" te escuche decir que preferías que consiguiera a alguien que estuviera más cerca y noooo me niego rotundamente, ¡te quiero es a tiiiiiiiiii ... solo a ti mi amor 🥹!. Eres la mujer que me hace feliz y con la que quiero todo, aunque las cosas se pongan difíciles te quiero elegir solo a ti amor ❤️.</p>`,
      `<p>Eres mi única opción y con la que quiero tener mi familia y mi futuro, me la jugaré por ti ya te dije 🧐!! Y no seas afrentosa de decir que merezco a alguien más. Tú o nada mi amor hermoso, y no creas que me olvide de que hoy era también día de flores amarillas señorita 😏  <a href="flores.html" class="redirect-link">Haz clic aquí para ver algo especial</a> </p>`
    ];
  
    let currentPage = 0;
  
    function renderPage() {
      $('#page-content').html(pages[currentPage]);
      $('#prev-page').prop('disabled', currentPage === 0);
      $('#next-page').prop('disabled', currentPage === pages.length - 1);
    }
  
    $('#prev-page').click(function() {
      if (currentPage > 0) {
        currentPage--;
        renderPage();
      }
    });
  
    $('#next-page').click(function() {
      if (currentPage < pages.length - 1) {
        currentPage++;
        renderPage();
      }
    });
  
    // Inicializamos con la primera página
    renderPage();
  });
  