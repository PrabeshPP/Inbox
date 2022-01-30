const { equal } = require('assert');
const assert=require('assert');
const { verify } = require('crypto');
const ganache=require('ganache-cli');
const Web3=require('web3');

const {abi,evm}=require("../compile");
let bytecode=evm.bytecode.object

let provider=ganache.provider()
let web3=new Web3(provider);
let accounts;
let inbox;

beforeEach(async()=>{
    // Get a list of all accounts
     accounts=await web3.eth.getAccounts();

    // Use one of them to deploy
    // Contracts
    inbox=await new web3.eth.Contract(abi)
    .deploy({data:bytecode,arguments:["Hi there!"]})
    .send({from:accounts[0],gas:'1000000'})

    inbox.setProvider(provider);



})


describe("Inbox",()=>{
    it("deploys a contract",()=>{
        assert.ok(inbox.options.address);
    })

    it("shoudl return the default message",async()=>{
        const message=await inbox.methods.message().call();
        assert.equal(message,"Hi there!");
    })
    it('should update the message variable when called ',async()=>{
   await inbox.methods.setMessage("Hi").send({from:accounts[0]});
    const message=await inbox.methods.message().call();

    assert.equal(message,'Hi');
        
    })

})









































//Mocha test

// function it -> Run a test and make an assertion.
//describe function ->Group together 'it' function
// beforeEach function -> Exxecute some general setup code.


// class Car{
//     park(){
//         return "Parked";
//     }

//     drive(){
//         return 'vroom';
//     }
// }
// let car;
// beforeEach(()=>{
//  car=new Car();
// })

// describe('Car',()=>{
//     it("shoud Park the car",()=>{
//         assert.equal(car.park(),'Parked');
        
//     })

//     it("Should produce the sound",()=>{
//         assert.equal(car.drive(),"vroom");
//     })
// })

