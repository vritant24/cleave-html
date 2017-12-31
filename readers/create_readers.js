const isSpace = c => /\s/.test(c);

function Reader(file) {
  this.file = file;
  this.index = 0;
}

/* Return next character in file stream and increments the Reader's index */
Reader.prototype.next = function() {
  return this.file[this.index++];
};

/* Returns next character in file without advancing Reader's index */
Reader.prototype.peek = function() {
  return this.file[this.index];
};

/* Returns the next HTML tag as a string. (Reads next word until space character is found) */
Reader.prototype.getTag = function() {
  let tag = "";
  while(!isSpace(this.peek())) {
    tag += this.next();
  }
  return tag;
};


const createReaders = files => files.map(file => new Reader(file));

module.exports = createReaders;
