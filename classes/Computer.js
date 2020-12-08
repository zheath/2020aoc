const print = require('../helpers/print');

class Computer {
    constructor(instructions){
        this.accumulator = 0;
        this.currInstIndex = 0;
        this.instructions = instructions;
        this.visitedIndices = [];
    }

    run(){
        //console.log('');
        //this.printInstructions();
        while(true){
            const { accumulator, currInstIndex, instructions, visitedIndices } = this;
            if(currInstIndex >= instructions.length){
                return {exitCode: 1, msg: `Program complete, Acc: ${accumulator}!`};
            }
            if(visitedIndices.includes(currInstIndex)){
                return {exitCode: -1, msg: `Infinite Loop Detected, Acc value = ${accumulator}!!!`}
            }
            visitedIndices.push(currInstIndex);
            const result = instructions[currInstIndex].execute(accumulator, currInstIndex);
            this.accumulator = result.acc;
            this.currInstIndex = result.nextIndex;
        }
    }
}

module.exports = Computer;