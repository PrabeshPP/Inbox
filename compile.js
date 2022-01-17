let path=require('path');
let fs=require('fs');
let solc=require('solc');

let inboxPath=path.resolve(__dirname,'contracts','Inbox.sol');
let source=fs.readFileSync(inboxPath,'utf-8');

console.log(solc.compile(source,1));
