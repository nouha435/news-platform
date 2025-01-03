document.getElementById('createArticleLink').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('create-article-section').style.display = 'block'; // Affiche le formulaire
  });

  document.getElementById('create-article-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('article-title').value;
    const content = document.getElementById('article-content').value;

    if (title && content) {
      alert('Article créé avec succès');
      document.getElementById('article-title').value = '';
      document.getElementById('article-content').value = '';
    } else {
      alert('Veuillez remplir tous les champs');
    }
  });
  