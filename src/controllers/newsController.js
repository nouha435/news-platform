const axios = require('axios');

const DUMMY_JSON_URL = 'https://dummyjson.com/posts';

const newsController = {
    // TODO: Question 5 - Implémenter les méthodes du contrôleur
    async getAllNews(req, res) {
        try {
            
            const response = await axios.get(DUMMY_JSON_URL);
            res.json(response.data.posts);
        } catch (error) {
            console.error(error.message);
            res.status(500).json({ message: 'Erreur serveur' });
        }
    },

    async getNewsById(req, res) {
        // TODO: Implémenter la récupération d'un article par son ID
        const id = req.params.id;

        try {
            const response = await axios.get(`${DUMMY_JSON_URL}/${id}`);
            res.json(response.data);
        } catch (error) {
            console.error(error.message);
            if (error.response && error.response.status === 404) {
                res.status(404).json({ message: 'Article non trouvé.' });
            } else {
                res.status(500).json({ message: 'Erreur serveur lors de la récupération de l\'article.' });
            }
        }
    },



    async createNews(req, res) {
        // TODO: Implémenter la création d'un article
        const { title, body, userId } = req.body; // Récupère les données de la requête
         // Validation
         if (!title || !body || !userId) {
            return res.status(400).json({ message: 'Tous les champs (title, body, userId) sont nécessaires.' });
        }
        try {
            const response = await axios.post(DUMMY_JSON_URL, { title, body, userId });
            res.status(201).json(response.data); // Renvoie les données de l'article créé
        } catch (error) {
            console.error(error.message);
            res.status(500).json({ message: 'Erreur serveur lors de la création de l\'article.' });
        }
    }
};


module.exports = newsController;