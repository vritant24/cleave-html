"use strict";

const fs        = require('fs-extra');

/*** Synchronous Version ***/
const readSourceFiles = ({ source }) => {
  return source.map((file_name) => {
    return fs.readFileSync(file_name, 'utf8');
  });
};

/*** Asynchronous Version ***
const readSourceFiles = ({ source }) => {
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
