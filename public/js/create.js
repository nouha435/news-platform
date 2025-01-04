// Gestion de la soumission du formulaire
document.getElementById('create-article-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Empêcher l'envoi du formulaire par défaut

  // Récupération des valeurs des champs
  const title = document.getElementById('article-title').value.trim();
  const content = document.getElementById('article-content').value.trim();
  const errorMessage = document.getElementById('error-message');
  const successMessage = document.getElementById('success-message');

  // Réinitialisation des messages d'erreur et de succès
  errorMessage.style.display = 'none';
  successMessage.style.display = 'none';

  // Vérification des champs
  if (!title || !content) {
      // Si un champ est vide, afficher un message d'erreur
      errorMessage.style.display = 'block';
      errorMessage.textContent = 'Veuillez remplir tous les champs avant de créer un article.';
  } else {
      // Si les deux champs sont remplis, afficher un message de succès
      successMessage.style.display = 'block';
      successMessage.textContent = 'Article créé avec succès !';

      // Réinitialisation des champs après la création
      document.getElementById('article-title').value = '';
      document.getElementById('article-content').value = '';
  }
});
