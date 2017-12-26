const fs        = require('fs');

/*** Synchronous Version ***/
/*
const parseSources = ({ source, static }) => {
  return source.map((file_name) => {
    return fs.readFileSync(file_name);
  });
}; */

/*** Asynchronous Version ***/
const parseSources = ({ source, static }) => {
  let filesArray = [];
  return new Promise((resolve) => {
    const cont = (err, data) => {
      console.log(data);
      filesArray.push(data);
      if(filesArray.length === source.length) {
        //console.log('resolved with: ', filesArray);
        resolve(filesArray);
      }
    };
    source.forEach((file_name) => {
      console.log(file_name);
      fs.readFile(file_name, cont);
    });
  });
};

module.exports = parseSources;
