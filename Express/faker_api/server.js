const express = require("express");
var faker = require('faker');
const app = express();
const port = 8000;

class User {
    constructor(){
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber= faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company {
    constructor(){
        this.name = faker.company.companyName();
        this.address = {
            "street": faker.address.streetName(),
            "city": faker.address.cityName(),
            "state": faker.address.state(),
            "zipCode": faker.address.zipCode(),
            "country": faker.address.country()
        }
    }
}
const user = new User();
const company = new Company();
app.get("/api/users/new", (req, res) =>{
    res.json(user);
});

app.get("/api/companies/new", (req, res) =>{
    res.json(company);
});

app.get("/api/user/company", (req, res) =>{
    res.json({user, company});
});

app.listen(port, () => console.log(`Listening on port:${port}`));