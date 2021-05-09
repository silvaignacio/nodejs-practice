const CreditCard = require("./credit-card");

const readUserData = (json) => {
    if(!json.email || !json.name) {
        throw new PropertyError("Email");
    } else {
        return new CreditCard(json.creditCardNumber, json.cvc, json.name, json.expiration, json.dues);
    }
}

module.exports = readUserData;