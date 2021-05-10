const CustomError = require("./custom-error");
const PropertyError = require("./property-error");
const readUserData = require("./read-user-data");

const createCard = (dataUser) => {
    try {
        
        return readUserData(dataUser);
     } catch (error) {
         if(error instanceof PropertyError) {
             console.error(error.message);
         }
     }
}

module.exports = createCard;

