function isString(token) {
    if(token && typeof token === "string") {
        return true;
    }
    return false;
}

module.exports = {
    isString: isString
}