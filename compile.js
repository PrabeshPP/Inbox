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
console.log(output.contracts["Inbox.sol"].Inbox.abi);
// module.exports=output.contracts["Inbox.sol"];
