// An array of all possible types
const types = ["undefined", "object", "boolean", "number", "string", "symbol", "function"];

// A function for strings to capitalise the first letter
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

// Generates typecheck function for the passed in string
function generateTypeCheck(type) {
    return function (token) {
        if(token && typeof token === type) {
            return true;
        }
        return false;
    }
};

// Export an object of typecheck functions for all types
module.exports = (() => {
    var obj = {};
    for(var s of types) {
        obj["is" + s.capitalize()] = generateTypeCheck(s);
    }

    //add isArray
    obj.isArray = Array.isArray;

    return obj
})();