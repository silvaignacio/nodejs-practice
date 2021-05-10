const getTypeCard = (cc) => {
    let amex = new RegExp('^3[47][0-9]{13}$');
    let visa = new RegExp('^4[0-9]{12}(?:[0-9]{3})?$');
    
    if(amex.test(cc)) {
        return "AMEX";
    } else {
        return "VISA";
    }
}

module.exports = getTypeCard;