const {Author} = require('../models/author.models');
module.exports.createAuthor = (request, response) => {
    const {name} = request.body;
    Author.create({
        name
    })
        .then(author => response.json(author))
        .catch(err => response.status(400).json(err));
}

module.exports.showAuthors = (request, response) =>{
    Author.find({})
        .then(author => response.json(author))
        .catch(err => response.json(err));
}

module.exports.findAuthor = (request, response) => {
    Author.findOne({_id:request.params.id})
        .then(author => response.json(author))
        .catch(err => response.json(err));
}
module.exports.updateAuthor = (request, response) => {
    Author.findOneAndUpdate({_id:request.params.id}, request.body, {new:true})
        .then(updatedAuthor => response.json(updatedAuthor))
        .catch(err => response.status(400).json(err));
}

module.exports.deleteAuthor = (request, response) => {
    Author.deleteOne({_id:request.params.id})
        .then(author => response.json(author))
        .catch(err => response.json(err));
}

