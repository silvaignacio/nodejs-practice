class CreditCard {
    constructor(creditNumber, cvc, owner, expiration, dues) {
        this.dues = dues;
        this.creditNumber = creditNumber;
        this.cvc = cvc;
        this.owner = owner;
        this.expiration = expiration;
    }
}
module.exports = CreditCard;