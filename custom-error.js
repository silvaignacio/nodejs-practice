/**
 * @author Ignacio Silva
 * @constructor 
 */
 class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}

module.exports = CustomError