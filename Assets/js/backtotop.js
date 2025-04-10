// Mostra il pulsante solo quando si scorre la pagina
window.onscroll = function () {
    var button = document.getElementById("backToTop");
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  };
  
  // Funzione per tornare in cima
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  