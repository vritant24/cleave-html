const types = ["undefined", "object", "boolean", "number", "string", "symbol", "function"];

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

function generateTypeCheck(type) {
    return function (token) {
        if(token && typeof token === type) {
            return true;
        }
        return false;
    }
};

module.exports = (() => {
    var obj = {};
    for(var s of types) {
        obj["is" + s.capitalize()] = generateTypeCheck(s);
    }
    return obj
})();