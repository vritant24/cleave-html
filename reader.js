const fs        = require('fs');
const type      = require("./typecheck.js");

const file = "cleave-html-config.json";

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

console.log(getConfig(file));