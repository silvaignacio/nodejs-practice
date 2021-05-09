const CustomError = require("./custom-error");
const PropertyError = require("./property-error");
const readUserData = require("./read-user-data");



try {
   const data = readUserData({
        "email": "hola@hola.com",
        "name": "Hola",
        "creditCardNumber" : 1234567890,
        "cvc": 123,
        "expiration": "12/05",
        "dues": 3
    });
    console.log(data);
} catch (error) {
    if(error instanceof PropertyError) {
        console.error(error.message);
    }
}
