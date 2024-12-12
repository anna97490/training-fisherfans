const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const PORT = 3000;

// Connexion to SQLite
const db = new sqlite3.Database('./database.sqlite', (err) => {
  if (err) {
    console.error('Erreur de connexion à SQLite:', err.message);
  } else {
    console.log('Connecté à SQLite.');
  }
});

// Middleware to parse JSON requests
app.use(express.json());

// Starting the server
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
