let path=require('path');
let fs=require('fs');
const newLocal = 'solc';
let solc=require(newLocal)

let inboxPath=path.resolve(__dirname,'contracts','Inbox.sol');
let source=fs.readFileSync(inboxPath,'utf-8');


var input={
    lanaguage:'Solidity',
    sources:{
        source:{
            content:'import "lib.sol"; contract C { function f() public { L.f(); } }'
        }
    },
    settings:{
        outputSelection: {
            '*': {
              '*': ['*']
            }
          }
    }
};

function findImports(path) {
    if (path === 'lib.sol')
      return {
        contents:
          'library L { function f() internal returns (uint) { return 7; } }'
      };
    else return { error: 'File not found' };
  }

  var output = JSON.parse(
    solc.compile(JSON.stringify(input), { import: findImports })
  );

  console.log(output);
