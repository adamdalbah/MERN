const AuthorController = require('../controllers/author.controllers');
const { Author } = require('../models/author.models');
module.exports = function(app) {
    app.get('/api/authors', AuthorController.showAuthors);
    app.get('/api/author/:id', AuthorController.findAuthor);
    app.post('/api/author', AuthorController.createAuthor);
    app.put('/api/author/:id', AuthorController.updateAuthor);
    app.delete('/api/delete/:id', AuthorController.deleteAuthor);
}