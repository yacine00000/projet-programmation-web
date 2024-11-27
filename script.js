document.getElementById("btnForm").addEventListener("click", function (e) {
  // Sélectionner les champs obligatoires
  const firstname = document.getElementById("firstname");
  const lastname = document.getElementById("lastname");
  const email = document.getElementById("email");
  const objet = document.getElementById("objet");
  const message = document.getElementById("message");
  const checkbox = document.getElementById("termsCheckbox");
  const indication = document.getElementById("indication");

  // Réinitialiser les messages d'erreur
  indication.textContent = "";
  indication.style.color = "";

  // Vérifier si tous les champs sont remplis
  let allFieldsValid = true;

  if (
    firstname.value.trim() === "" ||
    lastname.value.trim() === "" ||
    email.value.trim() === "" ||
    !/\S+@\S+\.\S+/.test(email.value) ||
    objet.value.trim() === "" ||
    message.value.trim() === ""
  ) {
    allFieldsValid = false;
  }

  // Gérer la validation et afficher le message approprié
  if (!allFieldsValid) {
    indication.textContent = "Veuillez remplir tous les champs obligatoires.";
    indication.style.color = "red";
  } else if (!checkbox.checked) {
    // Cas où tous les champs sont remplis mais la case des conditions n'est pas cochée
    indication.textContent = "Veuillez accepter les conditions générales.";
    indication.style.color = "red";
  } else {
    // Afficher le message de confirmation sans recharger la page
    indication.textContent = "Formulaire envoyé avec succès.";
    indication.style.color = "green";

    // Réinitialiser les champs du formulaire
    document.getElementById("monFormulaire").reset();
  }
});

// Fonctionnalité pour la flèche de retour en haut
const arrowUp = document.getElementById("arrow-up");

arrowUp.addEventListener("click", (event) => {
  event.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Afficher ou masquer la flèche selon la position de défilement
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    arrowUp.style.display = "block";
  } else {
    arrowUp.style.display = "none";
  }
});
