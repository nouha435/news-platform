require('dotenv').config();
const express = require('express');
const cors = require('cors');
const newsRoutes = require('./routes/newsRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Routes
app.use('/api/news', newsRoutes);

// TODO: Question 3 - Ajouter un middleware pour gérer les erreurs

app.use((err, req, res, next) => {
  console.error(err.stack); // Affiche l'erreur dans la console
  res.status(err.status || 500).json({
    message: err.message || 'Une erreur s\'est produite sur le serveur.',
  });
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
