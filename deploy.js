const HDWalletProvider=require("@truffle/hdwallet-provider");
const Web3=require('web3');
const{abi,evm}=require('./compile');
const bytecode=evm.bytecode.object;

/* in the HDWalletProvide we have pass two seprate arguments first-one our ac. pneumonic,
 and the second one should be the link provide by the Infura
*/

const provider=new HDWalletProvider(
    "deploying the contract"
)