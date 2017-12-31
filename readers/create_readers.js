function Reader(file) {
  this.file = file;
  this.index = 0;
}

Reader.prototype.printFile = function() {
  console.log(this.file);
};

/* Return next character in file stream and increments the Reader's index */
Reader.prototype.next = function() {
  return this.file[this.index++];
};

/* Returns next character in file without advancing Reader's index */
Reader.prototype.peek = function() {
  return this.file[this.index];
};



const createReaders = files => files.map(file => new Reader(file));

module.exports = createReaders;
