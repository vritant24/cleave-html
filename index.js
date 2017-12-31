const getConfig        = require('./readers/config_reader.js');
const readSourceFiles  = require('./readers/source_reader.js');
const createReaders    = require('./readers/create_readers.js');
const parser           = require('./parser.js');

getConfig()
  .then(readSourceFiles)
  .then(createReaders)
  .then(parser);
