const getConfig = require('./reader/config_reader.js');

getConfig().then(data => {
    console.log("Config File Read and Validated. Final Ouput: \n", data);
});
