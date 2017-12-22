const getConfig = require('./reader/config_reader.js');
const file = 15;

getConfig(file, (err, data) => {
  if(err) {
    // handle err pipeline here
    console.log("Error: ", err);
  }
  else {
    console.log(data);
  }
});
