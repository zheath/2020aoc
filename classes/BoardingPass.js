const print = require("./helpers/print");
const _ = require("lodash");

function buildArray(size) {
    const output = [];
    for (var i = 0; i < size; i++) { output.push(i) }
    return output;
}

function splitArray(arr, direction) {
    const halfIndex = arr.length / 2;
    if(['F','L'].includes(direction)){ return arr.slice(0, halfIndex) };
    if(['B','R'].includes(direction)){ return arr.slice(halfIndex*-1) };
    throw new Error('Unknown direction!');
}

function procArr(dirArray, optionsArray){    
    if(dirArray.length > 0){
        const dir = dirArray.shift();
        //print(['Processing Array',dirArray,optionsArray,dir])
        return procArr(dirArray, splitArray(optionsArray, dir))
    } else {
        return optionsArray[0];
    }    
}

class BoardingPass {
    constructor(passString){
        this.rowArray = passString.slice(0,7).split("");
        this.colArray = passString.slice(-3).split("");
        this.row = procArr(_.clone(this.rowArray), buildArray(128));
        this.col = procArr(_.clone(this.colArray), buildArray(8));
        this.id = this.row * 8 + this.col;
    }
}

module.exports = BoardingPass;