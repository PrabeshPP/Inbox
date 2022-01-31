const HDWalletProvider=require("@truffle/hdwallet-provider");
const Web3=require('web3');
const{abi,evm}=require('./compile');
const bytecode=evm.bytecode.object;

/* in the HDWalletProvide we have pass two seprate arguments first-one our ac. pneumonic,
 and the second one should be the link provide by the Infura
*/
const mnemonicPhrase="cancel evil glimpse lock riot capable crumble cliff ordinary leaf float taxi";
let provider=new HDWalletProvider({
    mnemonic:{phrase:
        mnemonicPhrase},
    providerOrUrl:"https://rinkeby.infura.io/v3/bd79d348176343c596b09fb772c7aa0c",
   
});

// web3

const web3=new Web3(provider);

//async-await function

const deploy=async()=>{
    const accounts=await web3.eth.getAccounts();
    console.log("Attempting to deploy from the account ",accounts[0]);
    const result=await new web3.eth.Contract(abi)
    .deploy({data:bytecode,arguments:["Hi there!"]})
    .send({from:accounts[0],gas:'1000000'});

    console.log("Contract deployed to ",result.options.address);
   
    
    
}

deploy();