const CustomError = require("./custom-error");
const PropertyError = require("./property-error");
const readUserData = require("./read-user-data");



try {
    readUserData({
        "email": "hola@hola.com",
        "name": "Hola",
        "creditCardNumber" : 1234567890,
        "cvc": 123,
        "expiration": "12/05",
        "dues": 3
    });
} catch (error) {
    if(error instanceof CustomError) {
        console.error(error.message);
    }
}
