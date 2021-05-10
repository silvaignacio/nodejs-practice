const CreditCard = require("./credit-card");
const getTypeCard = require("./get-type-card");

/**
 * 
 * @param {*} json 
 * @returns JSON from Service or Front End
 */
const readUserData = (json) => {
    if(!json.email || !json.name) {
        throw new PropertyError("Email");
    } else {
        return new CreditCard(json.creditCardNumber, json.cvc, json.name, json.expiration, json.dues, getTypeCard(json.creditCardNumber));
    }
}

module.exports = readUserData;