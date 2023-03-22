/*=============================
* Import des modules
*==============================*/

// Les bibliothèques
const bodyParser = require('body-parser');
const express = require('express');
const errorHandler = require('./middelwares/errorHandler');

// Les modules perso
const router = require('./routes/router');

/*=============================
* Configuration d'express
*==============================*/

// initalisation d'express et gestion du port
const app = express();
const PORT = 3010;

// Configuration du moteur de template
app.set('view engine', 'ejs');

// Configuration des views
app.set('views', './views');

// Gestion des fichiers statics
app.use(express.static('public'));

// gestion du body-parser
app.use(bodyParser.urlencoded({ extended: false })); // PM: true permet également de gérer les données "complexes"


/*=============================
* Définitions des routes
*==============================*/

// Entrée de la route (renvoi au fichier routes/router.js)
app.use(router);


// Fin de la route - Gestion des erreurs
app.use(errorHandler);

/*=============================
* Activation du serveur
*==============================*/
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
})
