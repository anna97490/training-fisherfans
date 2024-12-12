const sqlite3 = require('sqlite3').verbose();

// Connexion to the database
const db = new sqlite3.Database('./database.sqlite', (err) => {
    if (err) {
        console.error('Erreur de connexion à SQLite:', err.message);
    } else {
        console.log('Connecté à SQLite.');
    }
});

// Close the connexion
db.close();