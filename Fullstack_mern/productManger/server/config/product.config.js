const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/ProductDb", {
    useNewUrlParser: true,
    useUnifiedTopology:true,
})
    .then(() => console.log("Congratulations your database is now connected"))
    .catch(err => console.log("There was something wrong in the connection of database", err));
