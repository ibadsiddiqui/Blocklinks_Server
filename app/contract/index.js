const Web3 = require('web3');

var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

// address where the contract is deployed
const address = ""

// ABI of the contract
const abi;

// exports the contracts info on where it is deployed on the net
module.exports.DRW =  new web3.eth.Contract(abi, address);
// module.exports.Inbox