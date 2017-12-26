const getConfig     = require('./reader/config_reader.js');
const parseSources = require('./parser.js');

getConfig()
.then(parseSourcess)
.then((files) => {
  console.log("File Buffer =>", files);
});
