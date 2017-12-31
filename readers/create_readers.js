function Reader(file) {
  this.file = file;
}

Reader.prototype.printFile = function() {
  console.log(this.file);
};

const createReaders = files => files.map(file => new Reader(file));

module.exports = createReaders;
