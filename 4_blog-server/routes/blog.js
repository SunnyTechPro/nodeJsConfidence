const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth');
const validatePostMiddleware = require('../middlewares/validatePost');

// Mock database
let articles = [];

// Get home/api/articles -Get all posts
/*
 * @description: Originally, the URL was "posts" but i changed it 
                 to avoid confusion with the HTTP method of the same name.
 */
router.get('/articles', (req, res) => {
    res.json(articles);
});

// Get home/api/articles/:id -Get a single post by id
router.get('/articles/:id', (req, res) => {
    const post = articles.find(p => p.id === parseInt(req.params.id));
    if (!articles) {
        return res.status(404).json({ message: 'Post not found' });
    }
    res.json(articles);
});

// POST home/api/articles-Create a new post
router.post('/articles',
        authMiddleware,
        validatePostMiddleware,
        (req, res) => {
            const { title, content } = req.body;
            const newArticle = { 
                id: articles.length + 1,
                title,
                content,
            }
            articles.push(newArticle);
            res.status(201).json(newArticle);
        }
)
// PUT home/api/articels/:id = Update a article by id
router.put('/articles/:id',
        authMiddleware,
        validatePostMiddleware,
        (req, res) => {
            const article = articles.find(p => p.id === parseInt(req.params.id));
            if (!article) {
                return res.status(404).json({ message: 'Post not found' });
            }
            const { title, content } = req.body;
            article.title = title;
            article.content = content;
            res.json(article);
        }
);
// DELETE home/api/articles/:id -Delete a article by id
/*
 * @description: Originally, this call only return filtered results
                 but i changed it can delete data
 */
router.delete('/articles/:id', 
        authMiddleware,
        (req, res) => {
            const articleId = parseInt(req.params.id);
            const articleIndex = articles.findIndex(p => p.id === articleId);

            if (articleIndex === -1) {
                return res.status(404).json({ message: 'Article not found' });
            }

            articles.splice(articleIndex, 1);
            res.json({ message: 'Article deleted' });
        }
)

module.exports = router;