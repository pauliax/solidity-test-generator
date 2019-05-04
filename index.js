const config = require('config');
const fs = require("fs");
const loadJsonFile = require('load-json-file');
const generator = require('./app/generator');

const FILENAME_TXS = config.get('input.txs');

run = async function () {
  const fileContents = await loadJsonFile(FILENAME_TXS);
  const testFile = generator.generate(fileContents);

  fs.writeFile("generated-tests/example2.js", testFile, (err) => {
    if (err) {
      console.err(err);
    }

    console.log("Test file successfully generated: " + "generated-tests/example2.js");
  });
}

run();