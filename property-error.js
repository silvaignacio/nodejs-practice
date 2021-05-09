/**
 * @author Ignacio Silva
 * @constructor property
 */
 class PropertyError extends CustomError {
    constructor(property) {
        super("No property: "+ property);
        this.name = "PropertyError";
        this.property = property;
    }
}

module.exports = PropertyError;