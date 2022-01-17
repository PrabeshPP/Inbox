let path=require('path');
let fs=require('fs');
const { isNumberObject } = require('util/types');
const newLocal = 'solc';
let solc=require(newLocal)

let inboxPath=path.resolve(__dirname,'contracts','Inbox.sol');
let source=fs.readFileSync(inboxPath,'utf-8');
console.log(inboxPath);

console.log(solc.compile(source,1));
