const getConfig = require('./reader/config_reader.js');
const file = "cleave-html-config.json";

getConfig(file, (err, data) => {
  if(err) {
    // handle err pipeline here
    console.log(err);
  }
  else {
    console.log(data);
  }
});
