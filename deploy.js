const HDWalletProvider=require("@truffle/hdwallet-provider");
const Web3=require('web3');
const{abi,evm}=require('./compile');
const bytecode=evm.bytecode.object;

/* in the HDWalletProvide we have pass two seprate arguments first-one our ac. pneumonic,
 and the second one should be the link provide by the Infura
*/

const provider=new HDWalletProvider(
    "cancel evil glimpse lock riot capable crumble cliff ordinary leaf float taxi",
    "https://rinkeby.infura.io/v3/bd79d348176343c596b09fb772c7aa0c" 
)