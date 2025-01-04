// Exemple d'articles
const articles = [
    {
        title: "Les secrets pour réussir en programmation",
        image: "https://th.bing.com/th/id/R.71e4e518bffba9c80f73f5a60ccbb52d?rik=yu%2fxmbio01bM0Q&pid=ImgRaw&r=0",
        excerpt: "Découvrez les meilleures pratiques pour devenir un expert en programmation.",
        url: "#"
    },
    {
        title: "Comment l'intelligence artificielle change le monde",
        image: "https://th.bing.com/th/id/OIP.a5oamVgb3yKzZjLtePDtcAAAAA?rs=1&pid=ImgDetMain",
        excerpt: "L'IA est en train de transformer tous les aspects de notre vie quotidienne.",
        url: "#"
    },
    {
        title: "Les tendances technologiques en 2025",
        image: "https://img.freepik.com/premium-photo/woman-white-robot-suit-sits-bench_855221-4407.jpg",
        excerpt: "Voici les technologies qui domineront l'année 2025.",
        url: "#"
    }
];

// Charger les articles au démarrage
window.onload = function () {
    displayArticles(articles); // Afficher tous les articles au début
};

// Fonction pour afficher les articles
function displayArticles(articleList) {
    const articlesContainer = document.getElementById('articles');
    articlesContainer.innerHTML = ''; // Réinitialiser l'affichage
    articleList.forEach(article => {
        const articleCard = `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${article.image}" class="card-img-top" alt="${article.title}">
                    <div class="card-body">
                        <h5 class="card-title">${article.title}</h5>
                        <p class="card-text">${article.excerpt}</p>
                        <a href="${article.url}" class="btn btn-primary">Lire plus</a>
                    </div>
                </div>
            </div>
        `;
        articlesContainer.innerHTML += articleCard;
    });
}

// Fonction de recherche
function searchArticles() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredArticles = articles.filter(article =>
        article.title.toLowerCase().includes(searchInput)
    );

    // Afficher ou masquer le message Aucun article trouvé
    const noResults = document.getElementById('noResults');
    const footer = document.querySelector('footer');

    if (filteredArticles.length === 0) {
        noResults.style.display = 'block'; // Afficher le message
        footer.style.display = 'none'; // Masquer le pied de page
    } else {
        noResults.style.display = 'none'; // Cacher le message
        footer.style.display = 'block'; // Afficher le pied de page
    }

    // Afficher les articles filtrés
    displayArticles(filteredArticles);
    function showFullArticle(index) {
        const article = articles[index];
        document.getElementById('full-article-title').textContent = article.title;
        document.getElementById('full-article-image').src = article.image;
        document.getElementById('full-article-content').textContent = article.content;
        
        // Afficher l'article complet et masquer la liste des articles
        document.getElementById('full-article').style.display = 'block';
        document.getElementById('articles').style.display = 'none';
      }
      
      // Fonction pour fermer l'article et revenir à la liste des articles
      function closeArticle() {
        document.getElementById('full-article').style.display = 'none';
        document.getElementById('articles').style.display = 'block';
      }
      
      // Charger les articles au démarrage
      window.onload = function() {
        displayArticles(articles);
      };
// Charger les articles au démarrage
window.onload = function() {
    displayArticles(articles);
};
}
