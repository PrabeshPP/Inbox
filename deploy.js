const HDWalletProvider=require("@truffle/hdwallet-provider");
const Web3=require('web3');
const{abi,evm}=require('./compile');
const bytecode=evm.bytecode.object;
