// Aggiunge un listener per intercettare l'evento "submit" del form
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Previeni il comportamento predefinito del form (es. ricarica della pagina)
  
    // Raccoglie i dati dal form
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const email = document.getElementById("email").value;
    const object = document.getElementById("object").value;
    const message = document.getElementById("message").value;
  
    // Mostra un messaggio di caricamento (opzionale)
    console.log("Invio del messaggio in corso...");
  
    // Usa EmailJS per inviare i dati
    emailjs
      .send("service_10", "template_nmdkkjd", {
        name: name,
        surname: surname,
        email: email,
        object: object,
        message: message,
      })
      .then(
        function (response) {
          // Successo: Mostra un messaggio di conferma
          alert("Email inviata con successo!");
          console.log("SUCCESS!", response.status, response.text);
  
          // Resetta i campi del form
          document.getElementById("contact-form").reset();
        },
        function (error) {
          // Errore: Mostra un messaggio di errore
          alert("Errore durante l'invio dell'email. Riprova più tardi.");
          console.error("FAILED...", error);
        }
      );
  });
  