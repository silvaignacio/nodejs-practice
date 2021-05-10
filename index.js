const createCard = require("./utils");

const cardOne = createCard({
    "email": "hola@hola.com",
    "name": "Hola",
    "creditCardNumber" : 344595230409548,
    "cvc": 123,
    "expiration": "12/05",
    "dues": 3
});

console.log(cardOne);
