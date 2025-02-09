document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".menu a"); // Seleziona tutti i link del menu
    const currentPage = window.location.pathname; // Ottiene l'URL della pagina corrente
  
    links.forEach(link => {
      if (link.getAttribute("href") === currentPage) {
        link.setAttribute("aria-current", "page"); // Aggiunge aria-current al link attivo
      }
    });
  });
  