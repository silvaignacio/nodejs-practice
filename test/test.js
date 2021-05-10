const assert = require('assert');
const createCard = require('../utils');
const linearSearch = require('../utils/linear-search');
const sortDates = require('../utils/sort-dates');



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


const listOfBirthdays = [
    {
        name: "Jhon",
        date: new Date('2021-05-09')
    },
    {
        name: "Martin",
        date: new Date('2021-10-16')
    },
    {
        name: "Axel",
        date: new Date('2021-11-09')
    },
    {
        name: "Martin",
        date: new Date('2021-12-09')
    }
];

const sortedArrayAsc = sortDates(listOfBirthdays, 'ASC');

const sortedArrayDsc = sortDates(listOfBirthdays, 'DSC');

const listOfNumbers = [1,45,23,15,123];
const indexOfList = linearSearch(listOfNumbers, 123);

console.log(indexOfList);

