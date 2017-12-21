const fs        = require('fs');
const type      = require('../helpers/typecheck.js');

console.log(type);
const getConfig = (file_name) => {
    var config;

    if(!file_name && type.isString(file_name)) {
        return config;
    }

    try {
        config = JSON.parse(fs.readFileSync(file_name, 'utf8'));
    } catch(e) {
        //throw error
        console.log(e)
    }

    return config;
}

module.exports = getConfig;
