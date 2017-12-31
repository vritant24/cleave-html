const parser = readers => {
  readers.forEach((reader) => {
    console.log("Printing Reader in Parser\n-----------------------\n");
    reader.printFile();
    console.log(reader.next());
    console.log("\n\n");
  });
};

module.exports = parser;
