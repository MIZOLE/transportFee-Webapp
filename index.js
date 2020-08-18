const express = require("express")
const transportFee = require("./transportFee");

const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");

const myApp = express();

myApp.use(bodyParser.urlencoded({ extended: false }));
myApp.use(bodyParser.json());


myApp.engine('handlebars', exphbs());
myApp.set('view engine', 'handlebars');

myApp.get("/", function (req, res) {
    res.render("index")
});

myApp.post("/fee", function (req, res) {
    const price = transportFee(req.body.shift);
    res.render("fee", { price: price });
});

myApp.listen(3007, function () {
    console.log("myApp started on port 3007");
})