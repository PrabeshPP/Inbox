let path=require('path');
let fs=require('fs');
var solc=require('solc');
let inboxPath=path.resolve(__dirname,'contracts','Inbox.sol');
let source=fs.readFileSync(inboxPath,'utf-8');


var input={
    language: 'Solidity',
    sources:{
       'Inbox.sol' : {
            content: source
        }
    },
    settings:{
        outputSelection: {
            '*' :{
                '*' :['*']
            }
        }
    }
};


var output=JSON.parse(solc.compile(JSON.stringify(input)));
// let {abi,bytecode}=output.contracts["Inbox.sol"].Inbox.evm;
// console.log(output.contracts["Inbox.sol"]["Inbox"]);
module.exports=output.contracts["Inbox.sol"]["Inbox"];

