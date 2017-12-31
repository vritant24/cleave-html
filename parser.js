const parser = readers => {
  readers.forEach((reader) => {
    console.log("Printing Reader in Parser\n-----------------------\n");
    console.log(reader.getTag());
    console.log("\n\n");
  });
};

module.exports = parser;
