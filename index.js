const fileUtils = require('./app/file_utils');
const decoder = require('./app/decoder');

run = async function () {
  const fileContents = await fileUtils.readFile();
  decoder.decode(fileContents);
}

run();