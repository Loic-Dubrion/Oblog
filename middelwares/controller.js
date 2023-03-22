/*=================================
* Middelware d'aguillage des routes'
*==================================*/

// Récupération des données
const articles = require(('../data/articles.json'));


const controller = 
{
    home: (req, res, next) =>
    {
        res.render('home', {articles});
        next();
    },

    article: (req, res, next) =>
    {
        const id = req.params.id;
        const article = articles.find(article => article.title === id);

        article ? res.render('article', {article}) : res.status(404);

        next();
    },

    category: (req, res, next) => {

        const id = req.params.id;
        const category = articles.find(article => article.category === id);

        category ? res.render('category', {category, articles}) : res.status(404);

        next();
    },

    author: (req, res, next) => {

        const id = req.params.author;
        const author = articles.find(article => article.author === id);

        author ? res.render('author', {author, articles}) : res.status(404);

        next();
    },        
}

/*=================================
* Exportation des routes'
*==================================*/

module.exports = controller;