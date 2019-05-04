const config = require('config');
const fs = require("fs");
const loadJsonFile = require('load-json-file');
const generator = require('./app/generator');

const FILENAME_TXS = config.get('input.txs');
const OUTPUT_DIRECTORY = config.get('output.directory');

run = async function () {
  const fileContents = await loadJsonFile(FILENAME_TXS);
  const testFile = generator.generate(fileContents);

  const contractName = fileContents['contract'];
  const generatedTestFile = `${OUTPUT_DIRECTORY}/${contractName.toLowerCase()}.js`;

  fs.writeFile(generatedTestFile, testFile, (err) => {
    if (err) {
      console.err(err);
    }

    console.log("Test file successfully generated: " + generatedTestFile);
  });
}

run();