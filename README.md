# Solidity Test Generator (Proof of Concept)

Solidity test generator is a tool that generates Truffle compatible JavaScript tests for a smart contract written in Solidity language. This tool is a PoC and is not reliable with large scale smart contracts.

## Requirements

* Mythril Classic with test input generation module:

https://github.com/pauliax/mythril-classic/

* Solidity compilator (*solc*), recommended version: 0.4.25

* NodeJS & npm

* node-gyp:

```bash
npm install -g node-gyp
```

* Python 2.7, on Windows can be installed by running this command:

```bash
npm install --global --production windows-build-tools
```

* Install dependencies after cloning this repo:

```bash
npm install
```

## Recommended

* Add *Myth* and *solc* to environment variables

* Ubuntu 18.0.4 (also works on WSL)

* Truffle 4:

```bash
npm install -g truffle@4
```

## Run

* Run Mythril Classic on smart contract and place generated *txs.json* file to *data* folder:

```bash
./myth -v 4 -xo jsonv2 <PATH_TO_THE_SMART_CONTRACT> -m test_input_generator
```

* Run Solidity compilator with *--abi* flag on the same smart contract:

```bash
solc --abi solidity_examples/test_generation/Example.sol
```

* Run Solidity test generator:

```bash
node index
```

## Limitations

TBA
