class CreditCard {
    constructor(creditNumber, cvc, owner, expiration, dues, type) {
        this.dues = dues;
        this.creditNumber = creditNumber;
        this.cvc = cvc;
        this.owner = owner;
        this.expiration = expiration;
        this.type = type;
    }
}
module.exports = CreditCard;