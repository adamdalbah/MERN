const{ Product } = require('../models/product.models');
module.exports.createProduct = (request, response) => {
    const {title, price, description} = request.body;
    Product.create({
        title,
        price,
        description
    })
        .then(product => response.json(product))
        .catch(err => response.json(err));
}

module.exports.findAllProducts = (request, response) => {
    Product.find({})
        .then(products => response.json(products))
        .catch(err => response.json(err));
}

module.exports.findProduct = (request, response) =>{
    Product.findOne({_id: request.params.id})
        .then(product => response.json(product))
        .catch(err => response.json(err))
}