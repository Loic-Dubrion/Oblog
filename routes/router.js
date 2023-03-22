/*=============================
* Import des modules
*==============================*/

const express = require('express'); // Bibliothèque express
const router = express.Router();    // Bibliothèque router

const controller = require('../middelwares/controller');
const searchHandler = require('../middelwares/searchHandler');


/*=============================
* Définitions des routes
*==============================*/

router.get('/', controller.home);

router.get('/article/:id', controller.article);

router.get('/category/:id', controller.category);

router.get('/author/:author', controller.author);

router.post('/search', searchHandler);

/*=============================
* Export des routes
*==============================*/

module.exports = router;