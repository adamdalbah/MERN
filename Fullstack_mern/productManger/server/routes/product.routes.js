const ProductController = require('../controllers/product.controllers');
module.exports = function(app) {
    app.post('/api/products/new', ProductController.createProduct);
    app.get('/api/products', ProductController.findAllProducts);
    app.get('/api/products/:id', ProductController.findProduct);
    app.put('/api/editproduct/:id', ProductController.updateProduct);
    app.delete('/api/delproduct/:id', ProductController.deleteProduct);
}