const express = require('express');
const router = express.Router();
const newsController = require('../controllers/newsController');

// TODO: Question 4 - Compléter les routes
router.get('/', newsController.getAllNews);
router.get('/:id', newsController.getNewsById);
router.post('/', newsController.createNews);

//  Route pour mettre à jour une actualité par ID
router.put('/:id', newsController.updateNews);

//  Route pour supprimer une actualité par ID
router.delete('/:id', newsController.deleteNews);

module.exports = router;