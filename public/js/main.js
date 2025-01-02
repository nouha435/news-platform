// Fonction pour récupérer et afficher les derniers articles
async function fetchLatestNews() {
    try {
        const response = await fetch('/api/news');
        const data = await response.json();

        displayNews(data.posts);
    } catch (error) {
        console.error('Erreur:', error);
        console.log(data); // Vérifie si les données arrivent correctement

        showError('Impossible de charger les articles');
    }
}

// TODO: Question 1 - Compléter la fonction displayNews
function displayNews(news) {
    const container = document.getElementById('news-container');
    container.innerHTML = ''; // Vider le conteneur avant d'ajouter de nouveaux articles

    // Vérifier si les articles existent
    if (!news || news.length === 0) {
        showError('Aucun article disponible');
        return;
    }

    // Utilisez Bootstrap pour créer des cards pour chaque article
    news.forEach(article => {
        const articleDiv = `
            <div class="col-md-4 col-sm-6 mb-4">
                <div class="card h-100">
                    <img src="${article.image || 'default-image.jpg'}" class="card-img-top" alt="${article.title}">
                    <div class="card-body">
                        <h5 class="card-title">${article.title}</h5>
                        <p class="card-text">${article.body.substring(0, 150)}...</p>
                        <a href="/article/${article.id}" class="btn btn-primary">Voir plus</a>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += articleDiv; // Ajouter chaque carte à la page
    });
}


// TODO: Question 2 - Créer une fonction pour gérer les erreurs
function showError(message) {
    // Afficher un message d'erreur avec Bootstrap
    const errorDiv = document.getElementById('error-message');
    errorDiv.innerHTML = `<div class="alert alert-danger">${message}</div>`;
}

// Initialisation
document.addEventListener('DOMContentLoaded', fetchLatestNews);