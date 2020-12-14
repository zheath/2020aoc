const print = require('../helpers/print');
const _ = require("lodash");
const fillFloat = require('../helpers/fillFloat');

class BitComputer {
    constructor(instructions){
        this.mask = [];
        this.maskedAddresses = [];
        this.memory = {};
        this.addrs = {};
        this.instructions = instructions;        
    }
    run(){
        this.instructions.forEach(inst => {
            switch(inst.type){
                case 'msk':
                    this.mask = inst.value.split("");
                    break;
                case 'mem':
                    this.memory[inst.loc] = this.maskNumber(inst.value.toString(2).padStart(36,'0').split(""));
            }
        });
        return this.memory;
    }
    run2(){
        this.instructions.forEach(inst => {
            switch(inst.type){
                case 'msk':
                    this.mask = inst.value.split("");
                    break;
                case 'mem':
                    const maskedMemory = this.maskMemAddr(inst.loc.toString(2).padStart(36,'0').split(""));
                    const list = fillFloat([maskedMemory]);
                    list.forEach(addr => { this.addrs[addr] = inst.value })
            }
        });
        return this.addrs;
    }
    maskNumber(numArray){
        const output = parseInt(this.mask.map((val, i) => {
            if(val == 'X'){ return numArray[i] }
            return val;
        }).join(""),2);
        return output;
    }
    maskMemAddr(memArray){
        const output = this.mask.map((val, i) => {
            if(val == '0'){ return memArray[i] }
            return val;
        }).join("");
        //console.log(output);
        return output;
    }
}

module.exports = BitComputer;