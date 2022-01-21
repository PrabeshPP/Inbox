const assert=require('assert');
const { verify } = require('crypto');
const ganache=require('ganache-cli');
const Web3=require('web3');

let web3=new Web3(ganache.provider());

//Mocha test

// function it -> Run a test and make an assertion.
//describe function ->Group together 'it' function
// beforeEach function -> Exxecute some general setup code.


class Car{
    park(){
        return "Parked";
    }

    drive(){
        return 'vroom';
    }
}
let car;
beforeEach(()=>{
 car=new Car();
})

describe('Car',()=>{
    it("shoud Park the car",()=>{
        assert.equal(car.park(),'Parked');
        
    })

    it("Should produce the sound",()=>{
        assert.equal(car.drive(),"vroom");
    })
})

