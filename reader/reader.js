"use strict";

const { getConfig } = require('./config_reader.js');

getConfig().then(data => {
    console.log("Config File Read and Validated. Final Ouput: \n", data);
});
