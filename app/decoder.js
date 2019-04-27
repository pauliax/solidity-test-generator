const abiDecoder = require('abi-decoder');
const contractABI = require('../data/abi.json');

const testData = "0x47b5cd8120402040101001040180200108080801401040804002800101010101010101010404040140208080202008080808080110104080100202010101010101010101";

decode = function () {
  abiDecoder.addABI(contractABI);

  const decodedData = abiDecoder.decodeMethod(testData);

  return decodedData;
};

module.exports = {
  decode
}