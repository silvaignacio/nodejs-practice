const assert = require('assert');
const createCard = require('../utils');



/**
 * Test if card type is AMEX
 */
const cardAmexTested = createCard({
    "email": "hola@hola.com",
    "name": "Hola",
    "creditCardNumber" : 344595230409548,
    "cvc": 123,
    "expiration": "12/05",
    "dues": 3
});
assert.strictEqual(cardAmexTested.type, "AMEX");


/**
 * Test if card type is AMEX
 */
 const cardVisaTested = createCard({
    "email": "hola@hola.com",
    "name": "Hola",
    "creditCardNumber" : 4556161032873697,
    "cvc": 123,
    "expiration": "12/05",
    "dues": 3
});
assert.strictEqual(cardVisaTested.type, "VISA");

