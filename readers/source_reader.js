const fs        = require('fs');

/*** Synchronous Version ***/
const readSourceFiles = ({ source, static }) => {
  return source.map((file_name) => {
    return fs.readFileSync(file_name, 'utf8');
  });
};

/*** Asynchronous Version ***
const readSourceFiles = ({ source, static }) => {
  let filesArray = [];
  return new Promise((resolve) => {
    const cont = (err, data) => {
      filesArray.push(data);
      if(filesArray.length === source.length) {
        resolve(filesArray);
      }
    };
    source.forEach((file_name) => {
      console.log(file_name);
      fs.readFile(file_name, cont);
    });
  });
};
*/


module.exports = readSourceFiles;
